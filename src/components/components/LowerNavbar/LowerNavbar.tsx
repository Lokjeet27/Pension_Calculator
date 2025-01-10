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
                    
                </li>
                <li className="menu-item dropdown">
                    <a href="#">Port Info</a>
                    <ul className="dropdown-menu">
                        <li><a href="#">Trade Notice </a></li>
                        <li><a href="#">Sailent Features</a></li>
                        <li><a href="#">Draft Forecast</a></li>
                        <li><a href="#">Grievance</a></li>
                        <li><a href="#">Tidal Notice</a></li>
                        <li><a href="#">Maps</a></li>
                        <li><a href="#">Environmental Information</a></li>
                        <li><a href="#">Plans</a></li>
                        <li><a href="#">Permission for Construction</a></li>
                    </ul>
                </li>
                <li className="menu-item dropdown">
                    <a href="#">Media & Events</a>
                    <ul className="dropdown-menu">
                        <li><a href="#">Gallery</a></li>
                        <li><a href="#">Press Release</a></li>
                        
                    </ul>
                </li>
                <li className="menu-item dropdown">
                    <a href="#">Job Opening</a>
                    {/* <ul className="dropdown-menu">
                        <li><a href="#">Info 1</a></li>
                        <li><a href="#">Info 2</a></li>
                    </ul> */}
                </li>
                <li className="menu-item dropdown">
                    <a href="#">Concerns & Care </a></li>
                <li className="menu-item dropdown">
                    <a href="#">Corner</a>
                    <ul className="dropdown-menu">
                        <li><a href="#">GST Corner</a></li>
                        <li><a href="#">Medical</a></li>
                        <li><a href="#"onClick={handelOnPensionClick}>Employee Corner</a></li>

                    </ul>
                </li>
                {/* <li className="menu-item dropdown">
                    <a href="#" onClick={handelOnPensionClick}>Pension</a>
                </li>
                Add more dropdown menus as required */}
                <li className="menu-item dropdown">
                    <a href="#">Contact Us</a>
                    <ul className="dropdown-menu">
                        <li><a href="#">SMPK Telephone Directory</a></li>
                        <li><a href="#">SMPK Helpline</a></li>
                        <li><a href="#">Office Details</a></li>
                        <li><a href="#">Ministry of Shipping</a></li>
                        <li><a href="#">Board of Trustees</a></li>
                        <li><a href="#">Head of Dep. / Div.</a></li>
                        <li><a href="#">Corporate Contact Details</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
    )
}

export default LowerNavbar;