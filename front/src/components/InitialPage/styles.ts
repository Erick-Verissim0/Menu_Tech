import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
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
