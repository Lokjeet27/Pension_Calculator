import React from "react";
import "./LowerNavbar.css";
import { useNavigate } from "react-router-dom";

const LowerNavbar: React.FC = () => {
    const navigate = useNavigate();
    const handelOnPensionClick = () =>{
        navigate('/pensionpage')
    }
    return (
        <nav className="navbar">
            <ul className="navbar-menu">
                <li className="menu-item home">
                    <a href="#"><i className="bi bi-house-door-fill"></i></a>
                </li>
                <li className="menu-item dropdown">
                    <a href="#">About Us</a>
                    <ul className="dropdown-menu">
                        <li><a href="#">Organizational Structure of SMPK</a></li>
                        <li><a href="#">Annual Accounts</a></li>
                        <li><a href="#">Brief History of SMPK</a></li>
                        <li><a href="#">Administrative Report</a></li>
                    </ul>
                </li>
                <li className="menu-item dropdown">
                    <a href="#">Rules And Regulations</a>
                    <ul className="dropdown-menu">
                        <li><a href="#">Rule 1</a></li>
                        <li><a href="#">Rule 2</a></li>
                    </ul>
                </li>
                <li className="menu-item dropdown">
                    <a href="#">Port Info</a>
                    <ul className="dropdown-menu">
                        <li><a href="#">Info 1</a></li>
                        <li><a href="#">Info 2</a></li>
                    </ul>
                </li>
                <li className="menu-item dropdown">
                    <a href="#" onClick={handelOnPensionClick}>Pension</a>
                </li>
                {/* Add more dropdown menus as required */}
            </ul>
        </nav>
    )
}

export default LowerNavbar;