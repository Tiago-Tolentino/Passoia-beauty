
import "./looks.scss"
import labios from "../../images/labios.png"
import olhos from "../../images/olhos.png"
import rosto from "../../images/rosto.png"
import tendencia from "../../images/tendencia.png"

function Looks(){
    return(
        <section className="looks">
        <h2>LOOKS E DICAS DE MAQUIAGEM</h2>
        <div className="makes">
        <img src={labios} alt="labios" />
        <img src={olhos} alt="olhos" />
        <img src={rosto} alt="rosto" />
        <img src={tendencia} alt="tendencia" />
        </div>
        </section>

    )
}

export default Looks