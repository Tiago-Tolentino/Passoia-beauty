import "./header.scss"
import logo from "../../images/logo passoia.png"

function Header() {
    return (
        <header>
            {/* logo */}
            <img src={logo} alt="logo marca da pagina" />
            {/* menu interativo */}
            <ul>
                <li>LOOKS</li>
                <li>LANCAMENTOS</li>
                <li>NOVIDADE</li>
            </ul>
        </header>
    )
}

export default Header;