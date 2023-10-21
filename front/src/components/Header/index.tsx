import React, { useState } from 'react';

import { Container, Content } from './styles';
import logo from '../../assets/images/logo.png';

export function Header() {
  return (
    <Container>
      <Content>
        <div className="page-details">
          <h1> Menu Tech </h1>
          <h2> A plataforma ideal para quem quer ter o restaurante ideal! </h2>
        </div>

        <img src={logo} alt="Menu Tech" />
      </Content>
    </Container>
  );
}
