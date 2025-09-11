import { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title, CategoryScale, LinearScale, BarElement } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, Title, CategoryScale, LinearScale, BarElement);

export default function DespesasTipoPagto({id}){
    const [chartdata, setChartData] = useState({datasets: []});
    const [isLoading, setIsLoading] = useState(true);
    const [erro, setErro] = useState(null);

    useEffect(() =>{
        const fetchData = async () => {
            setIsLoading(true);
            setErro(null);
            try {
                const resposta = await fetch(`http://localhost:3000/movimentacoes/getDadosGraficoTipoPagamento/${id}`);
                if(!resposta.ok){
                    throw new Error(`Erro no acesso a Api: ${resposta.status}`);
                }
                const dados = await resposta.json();
                
                if(!dados.labels || dados.labels.length === 0){
                    setChartData({
                        labels: ['Nenhuma despesa encontrada'],
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
            } catch (erro) {
                setErro("Não foi possível carregar os dados", erro);
            }finally{
                setIsLoading(false);
            }
        }
        fetchData();
    },[]);

    const options = {
        responsive: true,
        plugins:{
            legend: {position: 'top'},
            title:{display:true,text:'Distribuição por Tipo de Pagamento',font: {size: 16}}
        },
    }

    if(isLoading){
        return <div>Carregando gráfico...</div>
    }

    if(erro){
        return <div style={{color:'red'}}>{erro}</div>
    }

    return(
        <div style={{width: '320px', height: '320px'}}>
            <Pie data={chartdata} options={options}/>
        </div>
    )

}