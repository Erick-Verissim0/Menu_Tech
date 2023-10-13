import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { GlobalStyles } from './styles/GlobalStyles';
import { LoginPage } from './components/LoginPage';
import { InitialPage } from './components/InitialPage';

export function App() {
  return (
    <Router>
      <GlobalStyles />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<InitialPage />} />
      </Routes>
    </Router>
  );
}

{
  /* <>
      <GlobalStyles />
      <LoginPage />
    </> */
}
