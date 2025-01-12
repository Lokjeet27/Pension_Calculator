import React from "react";
import UpperNavbar from "../components/UpperNavbar/UpperNavbar";
import MainComp from "../components/MainComp/MainComp";
import LowerNavbar from "../components/LowerNavbar/LowerNavbar";
import Footer from "../Footer/footer";
import CarouselComponent from "../MiddleComponent/MiddleHomeComponent";


const HomePage: React.FC = () => {
    return (
        <header>
            <UpperNavbar />
            <MainComp />
            <LowerNavbar />
            <CarouselComponent />
            <Footer/>
        </header>
    )
}

export default HomePage;