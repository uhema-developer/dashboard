
import React, { useState } from "react";
import { Col, Container, Row,  Button,Form } from "react-bootstrap";


const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [secondaryEmail, setSecondaryEmail] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [pin, setPin] = useState("");
  const [address, setAddress] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      firstName,
      lastName,
      email,
      secondaryEmail,
      gender,
      phone,
      pin,
      address
    );
  };
  return (
    <>
      <Container className="mt-3">
        <Row className="justify-content-center">
          <Col md={6}>
            <h2>Employee Registration Form</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicfirstName">
                <Form.Label>First name </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your first name "
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasiclastName">
                <Form.Label>Last name </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your last name "
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your email "
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicsecondaryEmail">
                <Form.Label>Secondary Email </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your secondary email "
                  value={secondaryEmail}
                  onChange={(e) => setSecondaryEmail(e.target.value)}
                />
                </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicGender">
                <Form.Label>Gender</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your gender "
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                />
               
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPhone">
                <Form.Label>Phone number</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter your phone number "
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPin">
                <Form.Label>Pin code </Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter your pin code "
                  value={pin}
                  onChange={(e) => setPin(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicAddress">
                <Form.Label>Address </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your address "
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </Form.Group>
              <Button variant="primary" type="submit" className="mt-3">
              Register
            </Button>
             </Form>
            
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Register;
