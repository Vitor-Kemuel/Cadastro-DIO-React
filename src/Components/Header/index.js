import React from 'react'
import logo from '../../assets/logo-dio.png';

import { Button } from '../Button';

import {
  Container,
  Wrapper,
  Row,
  MenuRight,
} from './styles';

const Header = () => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <img src={logo} alt="Logo da dio" />
        </Row>
        <Row>
          <MenuRight href="#">Home</MenuRight>
          <Button title="Entrar" />
          <Button title="Cadastrar" />
        </Row>
      </Container>
    </Wrapper>
  )
}

export { Header }