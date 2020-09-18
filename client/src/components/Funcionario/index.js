import React from 'react';

import './styles.css'

import {
    Container,
    Button,
    Form,
    Row,
    Col,
    
} from 'react-bootstrap';

function Funcionario() {

    return (
        <Container className="containerFuncionario">
            <Form >
                <Row >
                    <Col>
                        <Form.Label>Nome:</Form.Label>
                        <Form.Control name="name" />
                    </Col>
                    <Col>
                        <Form.Label>Email:</Form.Label>
                        <Form.Control name="email" />
                    </Col>

                    <Col>
                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Cargo</Form.Label>
                            <Form.Control as="select" defaultValue="Choose...">
                                <option>Cargo...</option>
                                <option>...</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
                <Button variant="primary" type="submit">
                    Submit
                 </Button>
            </Form>
        </Container>
    )
}

export default Funcionario;