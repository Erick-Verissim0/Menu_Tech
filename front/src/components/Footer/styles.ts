import styled from 'styled-components';

export const Container = styled.footer`
  background: gray;
  width: 100%;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 0;
  left: 0;
  height: 10vh;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .footer-details {
    text-align: center;

    h1 {
      color: white;
      font-size: 24px;
    }

    h2 {
      color: #fff;
      font-weight: 400;
      font-size: 14px;
      opacity: 0.8;
      margin-top: 6px;
    }
  }
`;
