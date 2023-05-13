import { Link } from "react-router-dom";
import loginIcon from "../media/loginIcon.png"

function Menu() {
    return (
        <header>
            <nav className="navBar">
            <div className="leftMenu half">
                <span className="Bookstore-CMS">BookStore CMS</span>
                <ul className="menuItems">
                <li>
                <Link className="links" to="/">Books</Link>
                </li>
                <li>
                <Link className="links" to="/categories">Categories</Link>
                </li>
                </ul>
            </div>
            <div className="half">
                <img className="loginIcon" src={loginIcon} alt="Login" />
            </div>
      </nav>
    </header>
    );
}

export default Menu;