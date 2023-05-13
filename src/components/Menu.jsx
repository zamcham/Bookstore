import { Link } from "react-router-dom";

function Menu() {
    return (
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
            <div className="loginIcon half">

            </div>
      </nav>
    );
}

export default Menu;