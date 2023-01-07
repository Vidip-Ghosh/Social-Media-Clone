import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Post(props) {
     return (
          <Card style={{ width: '18rem' }}>
               <Card.Img variant="top" src={props.image} />
               <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                         {props.content}
                    </Card.Text>
                    <Button variant="primary">See Full</Button>
               </Card.Body>
          </Card>
     );
}

export default Post;