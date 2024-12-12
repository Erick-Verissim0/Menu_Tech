import styled from "styled-components";

export const Container = styled.div`
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f0f2eb;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin-top: 50px;
  padding: 20px;
  overflow: auto;

  h1 {
    padding: 15px;
    color: #333;
    font-size: 24px;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #dddddd;
`;

export const Th = styled.th`
  text-align: left;
  padding: 12px;
  background-color: #f7f7f7;
  border: 1px solid #dddddd;
`;

export const Td = styled.td`
  text-align: left;
  padding: 12px;
  border: 1px solid #dddddd;
`;

export const EditButton = styled.button`
  padding: 10px 20px;
  background-color: gray;
  color: white;
  font-size: 14px;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #2a2c31;
    transform: translateY(-2px);
  }

  &:active {
    background-color: #004085;
    transform: translateY(1px);
  }
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  width: 400px;
  text-align: center;

  h2 {
    margin-bottom: 20px;
    color: #333;
    font-size: 22px;
  }

  label {
    display: block;
    margin: 10px 0;
    text-align: left;
    color: black;
    font-weight: bold;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 5px 0 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
`;

export const SaveButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  font-size: 14px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 20px;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #0056b3;
    transform: translateY(-2px);
  }

  &:active {
    background-color: #004085;
    transform: translateY(1px);
  }
`;

export const DeleteButton = styled.button`
  padding: 10px 20px;
  background-color: #dc3545;
  color: white;
  font-size: 14px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 20px;
  margin-left: 10px;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #b71c1c;
    transform: translateY(-2px);
  }

  &:active {
    background-color: #8a0000;
    transform: translateY(1px);
  }
`;

export const CancelButton = styled.button`
  padding: 10px 20px;
  background-color: gray;
  color: white;
  font-size: 14px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 20px;
  margin-left: 10px;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #2a2c31;
    transform: translateY(-2px);
  }

  &:active {
    background-color: #8a0000;
    transform: translateY(1px);
  }
`;

export const ProductLabel = styled.span`
  font-weight: bold;
  color: #333;
  font-size: 18px;
`;

export const ProductCheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  margin: 5px 0;
`;

export const ProductName = styled.span`
  color: #555;
  font-size: 16px;
  padding: 0 0 0 5px;
`;

export const ProductPrice = styled.span`
  color: #007bff;
  font-size: 16px;
  margin-left: 5px;
`;
