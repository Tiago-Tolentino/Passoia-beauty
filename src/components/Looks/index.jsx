
import labios from "../../images/labios"
import olhos from "../../images/olhos"
import rosto from "../../images/rosto"
import tendencia from "../../images/tendencia"

function Looks(){
    return(
        <section>
        <h2>LOOKS E DICAS DE MAQUIAGEM</h2>
        <img src={labios} alt="labios" />
        <img src={olhos} alt="olhos" />
        <img src={rosto} alt="rosto" />
        <img src={tendencia} alt="tendencia" />
        </section>

    )
}

export default Looks