import {useState, useEffect} from 'react';
import {Bar} from 'react-chartjs-2';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

export default function TipoMovimentacao({id}){
    const [chartData, setChartData] = useState({datasets:[]})
    const [isLoading, setIsLoading] = useState(true);
    const [erro, setErro] = useState(null);

    useEffect(() =>{
       const fetchData = async () =>{
            setIsLoading(true);
            setErro(null);
            try{
                const resposta = await fetch(`http://localhost:3000/movimentacoes/getDadosGraficoTipoMovimentacao/${id}`);    
                if(!resposta.ok){
                    throw new Error(`HTTP erro! status: ${resposta.status}`);
                }
                const dados = await resposta.json();

                if(!dados.labels || dados.labels.lenght === 0){
                    setChartData({
                        labels: ['Nenhuma despesa encontrada!'],
                        datasets: [{
                            data: [1],
                            backgroundColor: ['#E0E0E0'],
                            borderColor: ['#BDBDBD'],
                            borderWidth: 1
                        }]
                    })
                }else{
                    setChartData(dados);
                }
            }catch(erro){
                setErro("Não foi possível carregar os dados!", erro);
                console.log("Não foi possível carregar os dados!", erro);
            }finally{
                setIsLoading(false);
            }
       } 
       fetchData();
    },[])

    const options = {
        responsive: true,
        plugins:{
            legend:{
                position: 'top'
            },
            title:{
               display: true,
               text: 'Gráfico de Despesas por tipo de pagamento',
               font: {size:16} 
            }
        }
    }

    if(isLoading){
        return <div>Carregando gráfico...</div>
    }

    if(erro){
        return <div style={{color: 'red'}}>{erro}</div>
    }

    return(
        <div style={{width:'320px', height: '320px'}}>
            <Bar data={chartData} options={options}/>
        </div>
    )
}