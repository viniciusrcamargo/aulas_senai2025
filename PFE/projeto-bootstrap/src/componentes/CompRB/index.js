import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default function CompRB(){
    return(
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Cartão</Card.Title>
          <Card.Text>
            Este cartão foi programado para informar que o Corinthiasns é campeão.
          </Card.Text>
          <Button variant="primary">Vai coringão</Button>
        </Card.Body>
      </Card>
    );
}