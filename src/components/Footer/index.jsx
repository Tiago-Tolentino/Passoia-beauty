import "./footer.scss"
// import img
import master from "../../images/mastercard.png"
import visa from "../../images/visa.png"
import pix from "../../images/pix.png"
import boleto from "../../images/boleto.png"
import insta from "../../images/insta.png"
import face from "../../images/face.png"
import youtube from "../../images/youtube.png"
import twitter from "../../images/twitter.png"

function Footer(){
    return(
        <section className="footer">
            <div className="atendimento">
                <h3>ATENDIMENTO</h3>
                <ul className="lista-footer">
                    <li>Fale Conosco</li>
                    <li>Perguntas Frequentes</li>
                    <li>Meus Pedidos</li>
                    <li>Nossas Lojas</li>
                </ul>
            </div>
            <div className="pagamento">
                <h3>FORMAS DE PAGAMENTO</h3>
                <div className="metodos">
                    <img src={master} alt="mastercard" />
                    <img src={visa} alt="visa" />
                    <img src={pix} alt="pix" />
                    <img src={boleto} alt="boleto" />
                </div>
            </div>
            <div className="redes-sociais">
                <h3>SIGA-NOS NAS REDES SOCIAIS</h3>
                <div>
                    <img src={insta} alt="instagram logo" />
                    <img src={face} alt="facebook logo" />
                    <img src={youtube} alt="youtube logo" />
                    <img src={twitter} alt="twitter logo" />
                </div>
            </div>
        </section>
    )
}

export default Footer