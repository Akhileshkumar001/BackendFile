import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function User({useer}) {
  return (
    <Card style={{ width: '18rem' ,marginTop: '10px' }}>
    <Card.Img variant="top" src={useer.avatar} />
    <Card.Body>
      <Card.Title>{useer.FirstName} {useer.LastName}</Card.Title>
      <Card.Text>
        {useer.Email}
      </Card.Text>
      <Button variant="primary">Follow</Button>
    </Card.Body>
  </Card>
  );
}

export default User;