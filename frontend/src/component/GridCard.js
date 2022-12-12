import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CardGroup from 'react-bootstrap/CardGroup';

const GridCard = (props) => {
  return (
    <Row xs={1} md={1} className="g-1" style={{paddingLeft: '2%', paddingRight: '2%', paddingBottom: '2%'}}>
        <Col >
          <Card>
            {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
            <Card.Body >
              <Card.Title className='fs-2 text-center border-bottom border-3 border-info'>{props.title}</Card.Title>
              <Card.Text>
                {props.text}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
    </Row>
  );
}

export default GridCard;