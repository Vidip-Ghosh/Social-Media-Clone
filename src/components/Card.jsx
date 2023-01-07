import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import posts from '../data/posts';
function PostCards() {
     return (
          <>
          <Card className="cardItem" style={{ width: '18rem' }}>
               <Card.Img variant="top" src="https://i.ytimg.com/vi/jph_07v1Gbs/maxresdefault.jpg" />
               <Card.Body>
                    <Card.Title>Hackathon</Card.Title>
                    <Card.Text>
                         This is our first hackathon
                    </Card.Text>
                    <Button variant="primary">See Full</Button>
               </Card.Body>
          </Card>
          <Card className="cardItem" style={{ width: '18rem' }}>
               <Card.Img variant="top" src="https://stiffentechnologies.com/wp-content/uploads/2021/11/Web-Development.jpg" />
               <Card.Body>
                    <Card.Title>Web Development</Card.Title>
                    <Card.Text>
                         Web Development Enthusiast
                    </Card.Text>
                    <Button variant="primary">See Full</Button>
               </Card.Body>
          </Card>
          <Card className="cardItem" style={{ width: '18rem' }}>
               <Card.Img variant="top" src="https://www.androiddeveloper.co.in/blog/wp-content/uploads/2016/03/Android-App-Development-2.jpg" />
               <Card.Body>
                    <Card.Title>Android Development</Card.Title>
                    <Card.Text>
                         Kotlin is the most preferred language to learn. Requires less lines of code.
                    </Card.Text>
                    <Button variant="primary">See Full</Button>
               </Card.Body>
          </Card>
          </>
     );
}

export default PostCards;