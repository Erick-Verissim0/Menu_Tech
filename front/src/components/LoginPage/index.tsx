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
  ErrorMessage,
  Message,
} from './styles';
import loginPageImage from '../../assets/images/login-page.jpg';
import { useNavigate } from 'react-router-dom';

export function LoginPage() {
  const [createCountMode, setCreateCountMode] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [createUserMessage, setCreateUserMessage] = useState('');
  const [loginUserMessage, setLoginUserMessage] = useState('');

  const toggleCreateCount = () => {
    setErrorMessage('');
    setLoginUserMessage('');
    setCreateUserMessage('');
    setCreateCountMode(!createCountMode);
  };

  const navigate = useNavigate();

  const isFormValid = () => {
    if (createCountMode) {
      return (
        name.trim() !== '' && email.trim() !== '' && password.trim() !== ''
      );
    } else {
      return email.trim() !== '' && password.trim() !== '';
    }
  };

  const handleSubmit = async () => {
    const userData = {
      name,
      email,
      password,
    };

    if (!isFormValid()) {
      setErrorMessage('Por favor, preencha todos os campos obrigatórios.');
      return;
    }
    setName('');
    setEmail('');
    setPassword('');
    setErrorMessage('');
    setLoginUserMessage('Usuário logado com sucesso!');
    setCreateUserMessage('Usuário criado com sucesso!');

    try {
      if (createCountMode === true) {
        const createUser = await fetch('http://localhost:3001/user/create', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
        });
      } else {
        const loginUser = await fetch('http://localhost:3001/user/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
        });

        if (loginUser.ok) {
          const user = await loginUser.json();

          if (user) {
            setTimeout(() => {
              navigate('/');
            }, 2000);
          }
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <ImageContainer>
        <Image src={loginPageImage} alt="Minha Imagem" />
      </ImageContainer>
      <ContainerFields>
        <Title>{createCountMode ? 'Crie uma Conta' : 'Faça o Login'}</Title>

        {createCountMode && (
          <Fields
            type="text"
            placeholder="Digite seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        )}

        <Fields
          type="email"
          placeholder="Digite seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Fields
          type="password"
          placeholder="Digite sua senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {createCountMode ? (
          <LoginButton onClick={handleSubmit}>Criar Conta</LoginButton>
        ) : (
          <LoginButton onClick={handleSubmit}>Entrar</LoginButton>
        )}

        {errorMessage ? (
          <ErrorMessage>{errorMessage}</ErrorMessage>
        ) : (
          loginUserMessage && <Message>{loginUserMessage}</Message>
        )}

        <span>
          {createCountMode ? 'Já possui conta? ' : 'Não tem uma conta? '}
          <CreateCountButton onClick={toggleCreateCount}>
            <ChangeCollorButton>
              {createCountMode ? 'Faça Login' : 'Criar Conta'}
            </ChangeCollorButton>
          </CreateCountButton>
        </span>
      </ContainerFields>
    </Container>
  );
}
