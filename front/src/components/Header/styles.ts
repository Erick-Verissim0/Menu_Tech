import styled from 'styled-components';

export const Container = styled.header`
  background: gray;
  width: 100%;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .page-details {

    margin-left: 5%;

    h1 {
      color: white;
      font-size: 32px;
    }

    h2 {
      color: #fff;
      font-weight: 400;
      font-size: 16px;
      opacity: 0.9;
      margin-top: 6px;
    }
  }
`;
