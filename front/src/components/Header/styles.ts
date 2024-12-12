import styled from 'styled-components';

export const Container = styled.header`
  background: gray;
  height: 20vh;
  width: 100%;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

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

  .logoImg {
    position: absolute;
    top: 10px;
    left: 10px;
    width: 150px;
    z-index: -1;
  }
`;

export const UserIconContainer = styled.div`
  position: absolute;
  bottom: 15px;
  right: 15px;
  cursor: pointer;
  top: 10%;

  svg {
    color: white;
  }
`;

export const UserMenu = styled.div`
  background: #fff;
  color: #333;
  border-radius: 8px;
  padding: 10px;
  position: absolute;
  bottom: 40px;
  right: 15px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

  p {
    margin: 0;
    font-size: 14px;
    margin-bottom: 10px;
  }

  button {
    background-color: #f44336;
    color: white;
    border: none;
    padding: 8px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;

    &:hover {
      background-color: #d32f2f;
    }
  }
`;
