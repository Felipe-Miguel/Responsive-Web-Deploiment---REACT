import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";

  const Header = styled.header`
    margin: 0 3%;
    padding: 0 12%;
    height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: "Barlow", sans-serif;
    font-size: 1.5em;

    h1, a {
      color: white;
      transition: all 0.3s;
    }

    nav {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      gap: 4vw;
    }

    .dronein {
      font-size: 2em;
    }

    a:hover {
        text-shadow: 0 0 2px #FFF;
    }

    .botao {
      padding: 0.2em 0.6em;
      border: 1px solid #fff;
      border-radius: 0.5em;
      background-color: inherit;
      font-size: 1em;
      color: white;
    }
      .botao:hover {
        background-color: #fff;
        border-radius: 0.5em;
        color: #7209B7;
    }
  `;

export default function Menu() {

  const[usuarios,setUsuarios]=useState([])

  return (
    <Header id="menu">
      <nav>
        <h1 className="dronein" href="#menu">
          <span>DRONE</span>in
        </h1>
        <Link to="/solicitar">Solicitar entrega</Link>
        <Link to="/historico">Histórico</Link>
        <Link to={`/editar/${1}`}>Perfil</Link>
      </nav>
      <Link to="/" className="botao">Sair</Link>
    </Header>
  );
}
