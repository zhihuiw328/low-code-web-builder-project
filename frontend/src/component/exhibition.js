import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image'

const Exhibition = (props) => {
    return (
      <Row  style={{paddingLeft: '2%', paddingRight: '2%', paddingBottom: '2%'}}>
          <Col>
            <Image style={{height:"15rem",width:"40rem", margin:"auto"}} src={require("./component_image/mainscreen_sample2.png")} />
          </Col>

          <Col >
  
            <Card>
              {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
              <Card.Body >
                <Card.Title className='fs-2 border-bottom border-3' style={{textAlign:"right",color:"#29648A"}}>{props.title}</Card.Title>
                <Card.Text className='fs-5'>
                Here is one example of the website built by our users
              </Card.Text>
  
              </Card.Body>
            </Card>
          </Col>
          
    </Row>
    
    );
}

export default Exhibition;