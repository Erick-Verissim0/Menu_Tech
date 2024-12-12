import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { GlobalStyles } from './styles/GlobalStyles';
import { LoginPage } from './components/LoginPage';
import { InitialPage } from './components/InitialPage';
import { AuthProvider } from './auth/login.auth';

export function App() {
  return (
    <Router>
      <AuthProvider>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<InitialPage />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

{
}
