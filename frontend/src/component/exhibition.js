import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image'

const Exhibition = (props) => {
    return (
      <Row xs={1} md={1} className="g-1" style={{paddingLeft: '2%', paddingRight: '2%', paddingBottom: '2%'}}>
          <Col >
            <Card>
              {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
              <Card.Body >
                <Card.Title className='fs-2 text-center border-bottom border-3'>{props.title}</Card.Title>
                {/* <CardGroup className='d-flex flex-wrap'> */}

                <Row xs={1} md={3} className="g-2">
                    <Col>
                    <Card>
                        <Image className='w-100 h-100 rounded mx-auto d-block' src={require("./component_image/mainscreen_sample1.png")} />
                    </Card>
                    </Col>


                    <Col>
                    <Card>
                    <Image className='w-100 h-100 rounded mx-auto d-block' src={require("./component_image/mainscreen_sample2.png")} />
                    </Card>
                    </Col>

                    <Col>
                    <Card>
                    <Image className='w-100 h-100 rounded mx-auto d-block' src={require("./component_image/mainscreen_sample3.png")} />
                    </Card>
                    </Col>

                </Row>


                {/* </CardGroup> */}
  
  
  
              </Card.Body>
            </Card>
          </Col>
      </Row>
    );
}

export default Exhibition;