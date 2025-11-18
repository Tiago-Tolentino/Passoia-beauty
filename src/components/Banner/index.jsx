import "./banner.scss"
import banner from "../../images/banner.png"

function Banner(){
    return(
        <section >
            {/* imagem de banner */}
            <img className="banner" src={banner} alt="banner" />
        </section>
    )
}

export default Banner;