import React from "react";
import UpperNavbar from "../components/UpperNavbar/UpperNavbar";
import MainComp from "../components/MainComp/MainComp";
import LowerNavbar from "../components/LowerNavbar/LowerNavbar";


const HomePage: React.FC = () => {
    return (
        <header>
            <UpperNavbar />
            <MainComp />
            <LowerNavbar />
        </header>
    )
}

export default HomePage;