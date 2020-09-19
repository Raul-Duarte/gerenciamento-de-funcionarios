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
    const onSubmit = ({name,email}) => {
        console.log(name)
        dispatch(createFuncionario(name, email))
    }

    return (
        <Container className="containerFuncionario">
            <Form onSubmit={handleSubmit(onSubmit)} >
                <Row >
                    <Col>
                        <Form.Label>Nome:</Form.Label>
                    <Form.Control ref={register} name="name" />
                    </Col>
                    <Col>
                        <Form.Label>Email:</Form.Label>
                        <Form.Control ref={register} name="email" />
                    </Col>

                    <Col>
                        {/* <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Cargo</Form.Label>
                            <Form.Control as="select" defaultValue="Choose...">
                                <option>Cargo...</option>
                                <option>...</option>
                            </Form.Control>
                        </Form.Group> */}
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