// Funcionalidades / Libs:
import { Routes, Route } from "react-router-dom";

// Pages:
import Termo from "./pages/Termo";  
import Participou from "./pages/Participou";
// import Termos from "./pages/Termos";
// import Brocked from "./pages/Brocked";

// Components:
// import PrivateRoute from "./utils/PrivateRoute";


export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={ <Termo/> } />

            <Route path='/participou' element={ <Participou/> } />
        </Routes>
    )
}