import React from "react";
import './UpperNavbar.css';

const UpperNavbar: React.FC = () => {
    return (
        <div className="upper-navbar">
            <a href="#main" className="skip-link">Skip to main content</a>
            <div className="search-field">
                <input type="text" placeholder="Search here..." className="search-input" />
                <i className="bi bi-search"></i>
            </div>
            <div className="lang-select">
                <label htmlFor="language-selector">Language</label>
                <select name="language-selector" id="language-selector">
                    <option value="english">
                        <img src="images/united-states.png" alt="United states flag" />
                        English
                    </option>
                    <option value="hindi">
                        <img src="images/india.png" alt="Indian flag" />
                        Hindi
                    </option>
                </select>
            </div>
            <div className="contact">
                Help line No. - 9830494343
            </div>
        </div>
    )
}

export default UpperNavbar;