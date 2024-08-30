// Funcionalidades / Libs:
import { BrowserRouter } from 'react-router-dom';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// Contexts Providers:
// import UserProvider from './contexts/userContext';

// Components:
import AppRoutes from './routes'; //Config de rotas

// Estilos Global:
import './styles/global.scss';
// import './styles/elements.css';


export default function App() {

  return (
    <BrowserRouter>  

      <AppRoutes/>
      {/* <ToastContainer autoClose={4000} /> */}
      
    </BrowserRouter>
  )
}