import styled from "styled-components";
import { Link } from "react-router-dom";

  const Header = styled.header`
    margin: 0 3%;
    padding: 0 12%;
    height: 10vh;
    border-bottom: 1px solid #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: "Barlow", sans-serif;
    font-size: 1.5em;

    a {
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

    .links:hover {
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


  return (
    <Header id="menu">
      <nav>
        <a className="dronein" href="#menu">
          <span>DRONE</span>in
        </a>
        <a className="links" href="#tutorial">Como funciona</a>
        <a className="links" href="#vantagens">Vantagens</a>
        <a className="links" href="#rodape">Sobre</a>
      </nav>
      <Link to="/login" className="botao">Entrar</Link>
    </Header>
  );
}
