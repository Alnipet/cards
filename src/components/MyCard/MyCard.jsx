import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const MyCard = (props) => {
  return (
    <Card style={{ width: '18rem' }}>
      {props.children(props.isImage)}
      <Card.Body>
        <Card.Title>Fullstack-разработчик на JavaScript</Card.Title>
        <Card.Text>
          Научитесь программировать на JavaScript и TypeScript. Освоите
          передовые технологии — React, Node.js, Docker, Express.js, Nest.js,
          Firebase, MongoDB
        </Card.Text>
        <Button variant="primary">Узнать больше</Button>
      </Card.Body>
    </Card>
  );
};
