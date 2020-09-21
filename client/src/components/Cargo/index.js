import React from 'react';
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux'
import { Container, Form, Button, Col, Row } from 'react-bootstrap';
import { createCargo } from '../../store/modules/cargo/actions'
import './styles.css'

function Cargo() {

    const { register, handleSubmit } = useForm()
    const dispatch = useDispatch()
    const onSubmit = ({ name }) => {
        dispatch(createCargo(name))
    }

    return (
        <Container className="containerCargo">
            <h1>Cadastro de Cargo</h1>
            <Form onSubmit={handleSubmit(onSubmit)} >
                <Row  >
                    <Col className="colCargo">
                        <Form.Label>Nome:</Form.Label>
                        <Form.Control ref={register} name="name" />
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
