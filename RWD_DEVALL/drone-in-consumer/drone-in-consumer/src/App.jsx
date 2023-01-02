import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./style/GlobalStyle";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Pedido from "./pages/Pedido";
import Historico from "./pages/Historico";
import Perfil from "./pages/Perfil";
import Rastreio from "./pages/Rastreio";
import ListaUsuarios from "./pages/ListaUsuarios";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/users" element={<ListaUsuarios/>}/>
        <Route path='/editar/:id' element={<Perfil/>}/>
        
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/solicitar" element={<Pedido />} />
        <Route path="/historico" element={<Historico />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/rastreio" element={<Rastreio />} />
      </Routes>
    </BrowserRouter>
  );
}
