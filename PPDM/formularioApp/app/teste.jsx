// Componente Filho
const Saudacao = (props) => {
    return (
        <Text>Olá, {props.nome}!</Text>
    );
};

// Componente Pai
const App = () => {
    return (
        <View>
            <Saudacao nome="Maria" />
            <Saudacao nome="João" />
        </View>
    );
};