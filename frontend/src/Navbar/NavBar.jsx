import { Link } from "react-router-dom";
import './index.css'
const NavBar = () => {
    return ( 
        <>
            <nav className="navbar">
                <Link to="/">Trang chủ</Link>
                <Link to="/dogs">Danh Sách Dogs</Link>
                <Link to="/checkout">Giỏ hàng</Link>
            </nav>
        </>

    );
}
 
export default NavBar;