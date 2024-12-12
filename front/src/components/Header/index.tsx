import React, { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { useAuth } from '../../auth/login.auth';
import { useNavigate } from 'react-router-dom';
import { Container, Content, UserIconContainer, UserMenu } from './styles';
import logoImage from '../../assets/images/logo.png';

export function Header() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <Container>
      <Content>
        <div className="page-details">
          <h1>Bem-vindo, {user?.name}!</h1>
        </div>
      </Content>

        <img src={logoImage} className='logoImg' alt="Logo"/>

      <UserIconContainer onClick={() => setIsMenuVisible(!isMenuVisible)}>
        <FaUserCircle size={30} />
      </UserIconContainer>

      {isMenuVisible && (
        <UserMenu>
          <p>Olá, {user?.name}!</p>
          <button onClick={handleLogout}>Deslogar</button>
        </UserMenu>
      )}
    </Container>
  );
}
