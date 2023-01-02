import styled from "styled-components"
import Menu from "../components/MenuUsuario";

export default function Historico() {
    
    const DivHistorico = styled.main`
        background-color: #fff;
        padding: 5vh 15%;
        display: flex;
        flex-direction: column;
        min-height: 90vh;
        

        .titulos {
            margin-bottom: 10px;
            display: flex;
            justify-content: space-around;
            align-items: center;
            padding: 20px;
        }

        div {
            display: flex;
            justify-content: space-around;
            align-items: center;
            padding: 20px;
            border-top: 1px solid #7209B7;
        }

        article {
            text-align: center;
        }

        h3 {
            color: #7209B7;
        }
    `;

    return (
        <>
        <Menu/>
        <DivHistorico>
                <section className="titulos">
                    <h3>Origem</h3>
                    <h3>Destino</h3>
                    <h3>Entrega</h3>
                    <h3>Data</h3>
                    <h3>Status</h3>
                </section>

                <div>
                    <article>
                        <h3>R. Juá, nº 3</h3>
                        <h3>Carlos</h3>
                        <h3>11999999999</h3>
                    </article>
                    <article>
                        <h3>R. Juá, nº 3</h3>
                        <h3>Carlos</h3>
                        <h3>11999999999</h3>
                    </article>
                    <article>
                        <h3>Documento casa</h3>
                    </article>
                    <article>
                        <h3>20/11/2022</h3>
                    </article>
                    <article>
                        <h3>Finalizados</h3>
                    </article>
                </div>
                <div>
                    <article>
                        <h3>R. Juá, nº 3</h3>
                        <h3>Carlos</h3>
                        <h3>11999999999</h3>
                    </article>
                    <article>
                        <h3>R. Juá, nº 3</h3>
                        <h3>Carlos</h3>
                        <h3>11999999999</h3>
                    </article>
                    <article>
                        <h3>Documento casa</h3>
                    </article>
                    <article>
                        <h3>20/11/2022</h3>
                    </article>
                    <article>
                        <h3>Finalizados</h3>
                    </article>
                </div>
                <div>
                    <article>
                        <h3>R. Juá, nº 3</h3>
                        <h3>Carlos</h3>
                        <h3>11999999999</h3>
                    </article>
                    <article>
                        <h3>R. Juá, nº 3</h3>
                        <h3>Carlos</h3>
                        <h3>11999999999</h3>
                    </article>
                    <article>
                        <h3>Documento casa</h3>
                    </article>
                    <article>
                        <h3>20/11/2022</h3>
                    </article>
                    <article>
                        <h3>Finalizados</h3>
                    </article>
                </div>
                <div>
                    <article>
                        <h3>R. Juá, nº 3</h3>
                        <h3>Carlos</h3>
                        <h3>11999999999</h3>
                    </article>
                    <article>
                        <h3>R. Juá, nº 3</h3>
                        <h3>Carlos</h3>
                        <h3>11999999999</h3>
                    </article>
                    <article>
                        <h3>Documento casa</h3>
                    </article>
                    <article>
                        <h3>20/11/2022</h3>
                    </article>
                    <article>
                        <h3>Finalizados</h3>
                    </article>
                </div>
                <div>
                    <article>
                        <h3>R. Juá, nº 3</h3>
                        <h3>Carlos</h3>
                        <h3>11999999999</h3>
                    </article>
                    <article>
                        <h3>R. Juá, nº 3</h3>
                        <h3>Carlos</h3>
                        <h3>11999999999</h3>
                    </article>
                    <article>
                        <h3>Documento casa</h3>
                    </article>
                    <article>
                        <h3>20/11/2022</h3>
                    </article>
                    <article>
                        <h3>Finalizados</h3>
                    </article>
                </div>
            </DivHistorico>
        </>
    )


}

