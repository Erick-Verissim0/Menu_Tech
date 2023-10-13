import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  background-color: #f0f2eb;
`;

export const ImageContainer = styled.div`
  flex: 0 0 50%;
  height: 100%;

  @media (max-width: 800px) {
    display: none;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const ContainerFields = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15vh;
  color: black;

  @media (max-width: 800px) {
    padding: 0;
  }
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
  outline: none;

  @media (max-width: 800px) {
    width: 80%;
  }
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
  color: #1a0b2a;
  border: none;
  font-weight: 500;
`;

export const CreateCountButton = styled.button`
  background-color: transparent;
  color: #51445f;
  border: none;
  cursor: pointer;
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  margin: 5px 0px 20px;
  text-align: center;
`;

export const Message = styled.p`
  color: green;
  font-size: 14px;
  margin: 5px 0px 20px;
  text-align: center;
`;
