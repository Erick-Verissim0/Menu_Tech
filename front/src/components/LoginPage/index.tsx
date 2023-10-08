import React, { useState } from 'react';

import {
  LoginButton,
  Fields,
  Container,
  ContainerFields,
  Image,
  ImageContainer,
  Title,
  CreateCountButton,
  ChangeCollorButton,
} from './styles';
import loginPageImage from '../../assets/images/login-page.jpg';

export function LoginPage() {
  const [createCountMode, setCreateCountMode] = useState(false);
  const [name, setName] = useState('');

  const toggleCreateCount = () => {
    setCreateCountMode(!createCountMode);
  };

  return (
    <Container>
      <ImageContainer>
        <Image src={loginPageImage} alt="Minha Imagem" />
      </ImageContainer>
      <ContainerFields>
        <Title>{createCountMode ? 'Crie uma Conta' : 'Faça o Login'}</Title>
        {createCountMode && <Fields type="text" placeholder="Digite seu nome" value={name} onChange={(e) => setName(e.target.value)} />}

        <Fields type="email" placeholder="Digite seu e-mail" />
        <Fields type="password" placeholder="Digite sua senha" />
        {createCountMode ? <LoginButton> Criar Conta </LoginButton> : <LoginButton>Entrar</LoginButton>}

        <span>
          {createCountMode ? 'Já possui conta? ' : 'Não tem uma conta? '}
          <CreateCountButton onClick={toggleCreateCount}>
            <ChangeCollorButton>{createCountMode ? 'Faça Login' : 'Criar Conta'}</ChangeCollorButton>
          </CreateCountButton>
        </span>
      </ContainerFields>
    </Container>
  );
}
