import styled from "styled-components";
import Devall from "../img/devall.png";
import FIAP from "../img/fiap.webp";
import Stellantis from "../img/stellantis.png";

  const Footer = styled.footer`
    clear: both;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #191a1c;
    padding: 2vh 15%;
    font-size: 1.5em;

    .dronein {
      font-size: 2.7em;
      color: #fff;
    }

    p {
      text-align: center;
      color: #fff;
    }

    .logos {
      display: flex;
      gap: 10px;

      #Devall {
        height: 150px;
      }
    }

    .loguinhos {
      display: flex;
      flex-direction: column;
      gap: 10px;

      img {
        height: 70px;
      }
    }
  `;
export default function Rodape() {

  return (
    <Footer id="rodape">
      <p className="dronein">
        <span>DRONE</span>in
      </p>
      <p>
        Caio Henrique Martins - 93935
        <br />
        Carolina Puig - 95078
        <br />
        Felipe Miguel de Souza - 94921
        <br />
        Guilherme Costa - 93642
        <br />
        Isadora Antunes - 94785
      </p>
      <div className="logos">
        <img src={Devall} alt="Logo Devall" id="Devall" />
        <div className="loguinhos">
          <img src={FIAP} alt="Logo FIAP" />
          <img src={Stellantis} alt="Logo Stellantis" />
        </div>
      </div>
    </Footer>
  );
}
