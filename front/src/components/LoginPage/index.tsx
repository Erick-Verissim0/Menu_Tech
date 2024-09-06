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
    if (!isFormValid()) {
      setErrorMessage('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    setName('');
    setEmail('');
    setPassword('');
    setErrorMessage('');

    const userData = {
      name,
      email,
      password,
    };

    try {
      if (createCountMode) {
        const createUserResponse = await fetch('http://localhost:3001/user/create', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
        });

        if (createUserResponse.ok) {
          setCreateUserMessage('Usuário criado com sucesso!');

          const loginUserRequisition = await fetch('http://localhost:3001/user/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
          });

          if (loginUserRequisition.ok) {
            const user = await loginUserRequisition.json();
            if (user) {
              setLoginUserMessage('Usuário logado com sucesso!');
              setTimeout(() => {
                navigate('/home');
              }, 2000);
              return;
            }
          }

          setErrorMessage('Erro ao fazer login após criar a conta.');
        } else {
          setErrorMessage('Erro ao criar conta. Por favor, tente novamente.');
        }
      } else {
        const loginUserRequisition = await fetch('http://localhost:3001/user/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
        });

        if (loginUserRequisition.ok) {
          const user = await loginUserRequisition.json();
          if (user) {
            setLoginUserMessage('Usuário logado com sucesso!');
            setTimeout(() => {
              navigate('/home');
            }, 2000);
            return;
          }
        }

        setErrorMessage('Erro ao fazer login. Por favor, verifique seu e-mail e senha.');
      }
    } catch (error) {
      console.log(error);
      setErrorMessage('Erro de comunicação com o servidor.');
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
