export default function ListaForEach(){
	const nomes = [
		'Juscelino Kubschecks',
		'Fernando Henrique Barboso',
		'Luis Alface da Silva',
		'Jair Monalisa Bolsalario',
		'Zilma Ruchefe',
		'Shaolin Killpig'
];

	const pessoas = [];
	nomes.forEach((nome, index) => {
		pessoas.push(<li key={index}>{nome}</li>)
	})
	return(
		<ul>{pessoas}</ul>
	);
}