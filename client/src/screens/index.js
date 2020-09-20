import React from 'react';

import Cargo from '../components/Cargo';
import Funcionario from '../components/Funcionario';
import Lista from '../components/Lista';

import { Container, Row } from 'react-bootstrap';
import { Wrapper, Content } from './styles'
import ListaCargo from '../components/ListaCargo';
// import Funcionario from '../components/Funcionario';

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
                            <Lista/>
                        </Row>
                        <Row>
                            <ListaCargo/>
                        </Row>
                    </Container>
                </Content>
            </Wrapper>


        </>
    )
}

export default Index;