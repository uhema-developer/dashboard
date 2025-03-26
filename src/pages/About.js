import React from "react";
import { Row, Card, Button, Col, Container, Image } from "react-bootstrap";

const About = () => {
  return (
    <div>
      <Container className="mt-4">
        <Row className="justify-content-lg-left">
          <Col>
            <Image
              src="https://t3.ftcdn.net/jpg/02/41/43/18/240_F_241431868_8DFQpCcmpEPVG0UvopdztOAd4a6Rqsoo.jpg"
              className="img-fluid rounded"
              alt="Responsive image"
            />
          </Col>
          <Col>
            <h2 className="text-success">Flipkart</h2>
            <p>
              Flipkart is an Indian e-commerce company that sells a wide variety
              of products online.This is a shopping company which includes all
              shopping items.
            </p>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <Card border="primary" style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Cash on Delivery</Card.Title>
                <Card.Text>
                  Description of the first feature.Highlight how it benefits the
                  user.
                </Card.Text>
              </Card.Body>
              <Button variant="primary">Learn More</Button>
            </Card>
          </Col>
          <Col>
            <Card border="danger" style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>No Cost EMI</Card.Title>
                <Card.Text>
                  Description of the first feature.Highlight how it benefits the
                  user.
                </Card.Text>
              </Card.Body>
              <Button variant="primary">Learn More</Button>
            </Card>
          </Col>
          <Col>
            <Card border="info" style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Easy returns</Card.Title>
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
    </div>
  );
};

export default About;
