export default function ListaMap(){
	const nomes = [
		'Juscelino Kubschecks',
		'Fernando Henrique Barboso',
		'Luis Alface da Silva',
		'Jair Monalisa Bolsalario',
		'Zilma Ruchefe',
		'Shaolin Killpig'
];
	
		const listaNomes = nomes.map((nome,index) =>{
			return <li key={index}>{nome}</li>	
		});

		return(
			<ul>{listaNomes}</ul>
		);		
	
}