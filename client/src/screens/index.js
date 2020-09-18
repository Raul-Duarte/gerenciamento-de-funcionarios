import React from 'react';

import Cargo from '../components/Cargo';
import Funcionario from '../components/Funcionario';
import Lista from '../components/Lista';

import { Container, Row } from 'react-bootstrap';
import { Wrapper, Content } from './styles'
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
                    </Container>
                </Content>
            </Wrapper>


        </>
    )
}

export default Index;