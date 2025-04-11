import escova from '../../assets/tarefas/escova.png';
import copo from '../../assets/tarefas/copo.png';
import dog from '../../assets/tarefas/dog.png';
import aluno from '../../assets/tarefas/aluno.png';
import quentinha from '../../assets/tarefas/quentinha.png';


const tarefas = [
    {
        id: 1,
        nome: "Escovar os dentes",
        imagem: escova,
        descricao: "Escovar os dentes sempre após as refeições."
    },
    {
        id: 2,
        nome: "Tomar água",
        imagem: copo,
        descricao: "Tomar 200ml de água de 1h em 1h."
    },
    {
        id: 3,
        nome: "Passear com o dog",
        imagem: dog,
        descricao: "Passear com o Alfredo todo dia as 19h."
    },
    {
        id: 4,
        nome: "Estudar programação",
        imagem: aluno,
        descricao: "Deixar de ser preguiçoso e fazer as tarefas."
    },
    {
        id: 5,
        nome: "Preparar marmitas",
        imagem: quentinha,
        descricao: "Preparar o rango todos os dias pra adiantar o dia depois de hoje."
    }
];

export default tarefas;