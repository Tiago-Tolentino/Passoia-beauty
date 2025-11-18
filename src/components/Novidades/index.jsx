import "./novidades.scss"
import banner2 from "../../images/banner-2.png"

function Novidades(){
    return(
        <section className="novidades">
            <h2>NOVIDADES PARA VOCÊ</h2>
            <img src={banner2} alt="banner 2" />
        </section>
    )
}

export default Novidades