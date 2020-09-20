import React from 'react';
import {useDispatch} from 'react-redux'
import { useForm } from "react-hook-form";
import {createFuncionario} from '../../store/modules/funcionario/actions'

import './styles.css'

import {
    Container,
    Button,
    Form,
    Row,
    Col,
    
} from 'react-bootstrap';

function Funcionario() {
    const {register,handleSubmit} = useForm()
    const dispatch = useDispatch()
    const onSubmit = ({name,surname,date, salary,cargo_id}) => {
        dispatch(createFuncionario(name,surname,date, salary,cargo_id))
    }

    return (
        <Container className="containerFuncionario">
            <h1>Cadastro de Funcionario</h1>
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
                                <option value="1">Vendeddor</option>
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