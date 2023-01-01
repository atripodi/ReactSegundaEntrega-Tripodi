import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link to="/"><a className="navbar-brand" href="index.html">AT TALLER</a></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <Link to='/category/ceramica'><li className="nav-item">CERÁMICA</li></Link>
                        <Link to='/category/cuadernos'><li className="nav-item">CUADERNOS</li></Link>
                        <Link to='/category/enmarcados'><li className="nav-item">CUADROS</li></Link>
                        <Link to="/cart"><li className="nav-item">
                            <CartWidget/>
                        </li></Link>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;