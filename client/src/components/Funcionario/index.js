import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { useForm } from "react-hook-form";
import { createFuncionario } from '../../store/modules/funcionario/actions'
import api from '../../services/api'
import './styles.css'

import {
    Container,
    Button,
    Form,
    Row,
    Col,

} from 'react-bootstrap';

function Funcionario() {
    const { register, handleSubmit } = useForm()
    const [cargo, setCargo] = useState([])
    const dispatch = useDispatch()
    const onSubmit = ({ name, surname, date, salary, cargo_id }) => {
        dispatch(createFuncionario(name, surname, date, salary, cargo_id))
    }

    useEffect(() => {
        async function loadcargo() {
            const response = await api.get('cargo')
            const data = response.data
            setCargo(data)
        }
        loadcargo()
    }, [])

    return (
        <Container className="containerFuncionario">
            <h1>Cadastro de Funcionário</h1>
            <Form onSubmit={handleSubmit(onSubmit)} >
                <Row >
                    <Col>
                        <Form.Label>Nome:</Form.Label>
                        <Form.Control ref={register} name="name" />
                    </Col>
                    <Col>
                        <Form.Label>Sobrenome:</Form.Label>
                        <Form.Control ref={register} name="surname" />
                    </Col>
                    <Col>
                        <Form.Label>Data de Nascimento:</Form.Label>
                        <Form.Control ref={register} name="date" />
                    </Col>
                    <Col>
                        <Form.Label>Salario:</Form.Label>
                        <Form.Control ref={register} name="salary" />
                    </Col>
                    <Col>
                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Cargo</Form.Label>
                            <Form.Control ref={register} name="cargo_id" as="select" defaultValue="Choose...">
                                {cargo.map((cargo) => (
                                    <option value={cargo.id}>{cargo.name}</option>

                                ))}
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
