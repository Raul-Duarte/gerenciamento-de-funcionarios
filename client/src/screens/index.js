import React from 'react';

import { Container, Row } from 'react-bootstrap';
import { Wrapper, Content } from './styles'

import Cargo from '../components/Cargo';
import Funcionario from '../components/Funcionario';
import Lista from '../components/Lista';
import ListaCargo from '../components/ListaCargo';


const Index = () => {
    return (
        <>
            <Wrapper>
                <Content>
                    <Container>
                        <Row>
                            <Cargo />
                        </Row>
                        <Row>
                            <Funcionario />
                        </Row>
                        <Row>
                            <Lista />
                        </Row>
                        <Row>
                            <ListaCargo />
                        </Row>
                    </Container>
                </Content>
            </Wrapper>
        </>
    )
}

export default Index;