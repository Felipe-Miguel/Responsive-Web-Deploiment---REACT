import styled from "styled-components";
import Menu from "../components/MenuUsuario";

export default function Rastreio() {
  const DivRastreio = styled.main`
    background-color: #fff;
    padding: 20vh 15% 30vh;
    min-height: 90vh;
    display: flex;
    justify-content: space-around;
    font-size: 1.8em;
    color: #3a0ca3;
    gap: 5vh;

    section,
    div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      text-align: center;
      gap: 0 20px;
    }

    div {
      padding-top: 5vh;
    }

    .row {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 5vh 20px 0;
    }

    .divisor {
      width: 1px;
      background-color: #7209b7;
    }

    input {
      margin-bottom: 5vh;
      border-radius: 10px;
      height: 45px;
      font-size: 0.8em;
      cursor: pointer;
      transition: 0.5s;
    }

    .button-white {
      color: #3a0ca3;
      background-color: inherit;
      border: 1px solid #3a0ca3;

    }

    .button-color {
      color: #FFF;
      background-color: #3a0ca3;
      border: none;
    }

    input:hover {
        color:white;
        background-color: #7209b7;
        border: none;
    }

    h1 {
        font-size: 2em;
    }
  `;

  return (
    <>
      <Menu />
      <DivRastreio>
        <section>
          <div className="row">
            <article>
              <h3>R. Juá, nº 3</h3>
              <h3>Carlos</h3>
              <h3>11999999999</h3>
            </article>
            <h3>→</h3>
            <article>
              <h3>R. Juá, nº 3</h3>
              <h3>Carlos</h3>
              <h3>11999999999</h3>
            </article>
          </div>
          <input type="submit" name="cancelar" value="Cancelar Pedido" className="button-white" />
        </section>
        <div className="divisor"></div>
        <section>
          <div>
            <h1>12min restantes</h1>
            <p>Prepare-se para receber a entrega</p>
          </div>
          <input type="submit" name="cancelar" value="Autorizar pouso" className="button-color" />
        </section>
      </DivRastreio>
    </>
  );
}
