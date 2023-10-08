import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  background-color: #f0f2eb;
`;

export const ImageContainer = styled.div`
  flex: 0 0 50%; /* A imagem ocupa 50% da largura da tela */
  height: 100%;
`;

export const Image = styled.img`
  width: 100%; /* Garante que a imagem ocupe toda a largura do container */
  height: 100%; /* Mantém a proporção da imagem */
`;

export const ContainerFields = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20vh;
  color: black;
`;

export const Title = styled.h1`
  font-size: 25px;
  margin-bottom: 30px;
`;

export const Fields = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: none;
  border-bottom: 2px solid #007bff;
  border-color: #51445f;
  background-color: transparent;
  outline: none; /* Remove a borda ao focar */
`;

export const LoginButton = styled.button`
  background-color: #51445f;
  color: white;
  border: none;
  padding: 10px 20px;
  margin-top: 15px;
  margin-bottom: 25px;
  cursor: pointer;
`;

export const ChangeCollorButton = styled.button`
  color: #7a8c89;
  border: none;
  font-weight: 500;
`;

export const CreateCountButton = styled.button`
  background-color: transparent;
  color: #51445f;
  border: none;
  cursor: pointer;
`;
