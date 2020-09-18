import React from 'react';
import { Container, Form, Button, Col, Row } from 'react-bootstrap';
import './styles.css'

function Cargo() {
    return (
        <Container className="containerCargo">
            <Form >
                <Row  >
                    <Col className="colCargo">
                        <Form.Label>Nome:</Form.Label>
                        <Form.Control name="caargo" />
                    </Col>
                </Row>
                <Button variant="primary" type="submit">
                    Submit
                 </Button>


            </Form>
        </Container>
    );
}

export default Cargo;