import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import { ContextProvider } from './Context/context';
import Login from './Pages/Login';
import SignUp from './Pages/signUp';
import Home from './Pages/Home';
import CadastroCliente from './Pages/cadastroCliente';
import DetalhesCliente from './Pages/DetalhesCliente';
import Cobrancas from './Pages/Cobrancas';
import ContextModalEditUser from "./Context/contextModalEditUser";
import useModalEditUser from "./Hooks/useModalEditUser";


function App() {

  const modalStates = useModalEditUser();
  return (
    <div className="App">
      <BrowserRouter>
        <ContextProvider>
          <ContextModalEditUser.Provider value={modalStates}>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/cadastro" element={<SignUp />} />
              <Route path="/home" element={<Home />} />
              <Route path="/cliente" element={<CadastroCliente />} />
              <Route path="/cliente/detalhes" element={<DetalhesCliente />} />
              <Route path="/cobrancas" element={<Cobrancas />} />
            </Routes>
          </ContextModalEditUser.Provider>
        </ContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
