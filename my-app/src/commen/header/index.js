import { Link } from "react-router-dom";
import {MenuOutlined, CloseOutlined} from '@ant-design/icons';
import { useState } from "react";

function Header() {
    const [showMenu, setShowMenu] = useState(false)
    return (
        <div className="navbar">
           { showMenu ? <span onClick={()=> setShowMenu(false)}><CloseOutlined style={{ fontSize: '25px', color: 'white' }} /></span> : <span onClick={()=> setShowMenu(true)}><MenuOutlined onClick={()=> setShowMenu(false)}style={{ fontSize: '25px', color: 'white' }} /></span>}
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/product">Product</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </div>
    )
}

export default Header;