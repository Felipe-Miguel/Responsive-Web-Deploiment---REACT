import Main from "../style/HomeStyle";
import Menu from "../components/MenuHome";
import Rodape from "../components/Rodape";
import DronePrincipal from "../img/drone-principal.png";
import Itens from "../img/caixa.png";
import Distancia from "../img/distancia.png";
import Drone from "../img/drone.png";
import Recebido from "../img/recebido.png";
import Tempo from "../img/rapidez.png";
import Porco from "../img/porquinho.png";
import Planeta from "../img/sustentabilidade.png";

export default function Home() {
  return (
    <>
      <Menu />
      <Main>
        <section id="principal">
          <img src={DronePrincipal} alt="Drone" />
          <div>
            <h1>
              Sua entrega chega voando!
            </h1>
            <p>
              Envie ou receba pequenos produtos rapidamente usando um drone.
            </p>
            <a href="/">Começar agora</a>
          </div>
        </section>
        <section id="tutorial">
          <h1>Como funciona</h1>
          <div>
            <article>
              <img src={Itens} alt="Caixa com itens" />
              <p>
                1. Informe o que
                <br />
                será enviado*
              </p>
            </article>
            <article>
              <img src={Distancia} alt="Distância entre dois pontos" />
              <p>
                2. Insira o local de
                <br />
                envio e entrega
              </p>
            </article>
            <article>
              <img src={Drone} alt="Drone" />
              <p>
                3. Rastreie sua
                <br />
                entrega
              </p>
            </article>
            <article>
              <img src={Recebido} alt="Caixa sendo entregue" />
              <p>
                4. Autorize o pouso
                <br />
                do seu pedido
              </p>
            </article>
          </div>
          <p>
            * o peso máximo suportado é 2,5kg, e as dimensões não podem passar
            de 30 x 30 x 30cm.
          </p>
        </section>
        <section id="vantagens">
          <h1>Vantanges</h1>
          <div>
            <article>
              <h2>Menor espera</h2>
              <img src={Tempo} alt="Tempo correndo" />
              <p>
                Com uma logística aérea e sem trânsito, um drone chega muito
                mais rápido do que um pedido de entrega convencional, reduzindo
                o tempo de entrega em minutos.
              </p>
            </article>
            <article>
              <h2>Baixo Custo</h2>
              <img src={Porco} alt="Cofrinho de porco guardando uma moeda" />
              <p>
                Por não arcarem com o custo de combustível e limitarem os gastos
                somente com a recarga da bateria, drones têm um valor de frete
                mais baixo que soluções comuns.
              </p>
            </article>
            <article>
              <h2>Solução Consciente</h2>
              <img src={Planeta} alt="Planta nascendo muito grande no mundo" />
              <p>
                Diferente dos carros, os drones não precisam de combustível, por
                isso são uma opção mais sustentável que não contribuem na
                emissão de CO2 no meio ambiente.
              </p>
            </article>
          </div>
        </section>
      </Main>
      <Rodape />
    </>
  );
}
