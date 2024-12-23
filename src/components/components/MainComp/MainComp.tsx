import React from "react";
import "./MainComp.css";

const MainComp: React.FC = () => {
    return (
        <div className="header-container">
            <div className="header-background">
                <div className="header-content">
                    <img
                        src="images/Emblem.png"
                        alt="Emblem of India"
                        className="emblem"
                    />
                    <div className="header-text">
                        <h1>SYAMA PRASAD MOOKERJEE PORT, KOLKATA</h1>
                        <p>A Statutory Body under the Ministry of Ports, Shipping and Waterways, Government of India</p>
                        <h3>SMP, KOLKATA</h3>
                    </div>
                    <img
                        src="images/SMP_logo.png"
                        alt="SMP Logo"
                        className="smp-logo"
                    />
                </div>
                <div className="sub-header">
                    <span className="sub-header-icon">⚓</span>
                    <span className="sub-header-text">Kolkata Dock System | Haldia Dock Complex</span>
                </div>
            </div>
        </div>
    );
};

export default MainComp;
