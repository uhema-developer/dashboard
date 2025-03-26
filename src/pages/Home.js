import React from 'react'
import {Row,Card,Button,Col,Container }from 'react-bootstrap';

const Home = () => {
  return (
    <>
      <Container className="mt-3">
        <Row className="text-center">
          <Col>
            <h2 className="text-success">Welcome to Flipkart</h2>
            <p>This is a shopping company which includes all shopping items.</p>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Feature one</Card.Title>
                <Card.Text>
                  Description of the first feature.Highlight how it benefits the
                  user.
                </Card.Text>
              </Card.Body>
              <Button variant="primary">Learn More</Button>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Feature one</Card.Title>
                <Card.Text>
                  Description of the first feature.Highlight how it benefits the
                  user.
                </Card.Text>
              </Card.Body>
              <Button variant="primary">Learn More</Button>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Feature one</Card.Title>
                <Card.Text>
                  Description of the first feature.Highlight how it benefits the
                  user.
                </Card.Text>
              </Card.Body>
              <Button variant="primary">Learn More</Button>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}



export default Home
