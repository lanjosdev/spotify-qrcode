// Funcionalidades / Libs:
import { BrowserRouter } from 'react-router-dom';

// Contexts Providers:
// import UserProvider from './contexts/userContext';

// Components:
import AppRoutes from './routes'; //Config de rotas

// Estilos Global:
import './styles/global.css';
import './styles/elements.css';


export default function App() {

  return (
    <BrowserRouter>  

      <AppRoutes/>
      
    </BrowserRouter>
  )
}