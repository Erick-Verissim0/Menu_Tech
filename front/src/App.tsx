import 'react-toastify/dist/ReactToastify.css';

import { GlobalStyles } from './styles/GlobalStyles';
import { LoginPage } from './components/LoginPage';

export function App() {
  return (
    <>
      <GlobalStyles />
      <LoginPage />
    </>
  );
}
