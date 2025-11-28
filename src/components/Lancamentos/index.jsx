import "./lancamentos.scss"
import "../responsividade/responsividade.scss"
// hooks sao funcoes especiais do react;
// useState controla os estados de algo na interface
import { useState } from "react";
// import das imagens
import batom_1 from "../../images/batom-1.png";
import batom_2 from "../../images/batom-2.png";
import batom_3 from "../../images/batom-3.png";
import azul from "../../images/batom-azul.png";
import vermelho from "../../images/batom-vermelho.png";
import marrom from "../../images/batom-marrom.png";
import base from "../../images/batom-base.png";
import stars from "../../images/rating-stars.png"
import botao_azul from "../../images/botao-azul.png"
import botao_vermelho from "../../images/botao-vermelho.png"
import botao_marrom from "../../images/botao-marrom.png"
import botao_base from "../../images/botao-base.png"


function Lancamentos() {
    
    // cor a variavel inicial, setCor a funcao atualizadora
    const [cor, setCor] = useState(base)

    return(
        <section className="batoes">
            <h2>APROVEITE OS LANCAMENTOS</h2>
            <div className="descricao">
                <div className="fotos_batom">
                    <img src={batom_1} alt="kit de batoes 1" />
                    <img src={batom_2} alt="kit de batoes 2" />
                    <img src={batom_3} alt="kit de batoes 3" />
                </div>
                <div className="ex_batons">
                    <img src={cor} alt="batom da cor base" />
                </div>
                <div className="detalhes">
                    <img className="estrelas" src={stars} alt="estrelas de avaliacao" />
                    <h3>Matte Premium</h3>
                    <h5>Cores disponiveis</h5>
                    <div className="botoes">
                        <img button onClick={() => setCor(azul)} src={botao_azul} alt="botao azul" />
                        <img button onClick={() => setCor(vermelho)} src={botao_vermelho} alt="botao azul" />
                        <img button onClick={() => setCor(marrom)} src={botao_marrom} alt="botao azul" />
                        <img button onClick={() => setCor(base)} src={botao_base} alt="botao azul" />
                    </div>
                    <h4>Descricão</h4>
                    <p>O Batom Matte possui uma fórmula inovadora desenvolvida para entregar o máximo de cor na primeira aplicação com um deslize suave e macio. Tem acabamento matte aveludado e manteiga de manga que ajuda a hidratar e a proteger os lábios contra ressecamento. Ajuda na hidratação dos lábios, textura fina e macia que não pesa nos lábios.</p>
                </div>
            </div>
        </section>
    )
}

export default Lancamentos