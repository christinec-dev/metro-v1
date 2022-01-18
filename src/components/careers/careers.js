import React from "react";
import Navigation from "../global/navbar";
import Footer from "../global/footer";
import Header from "./header";
import Positions from "./positions";
import Values from "./values";
import ScrollToTop from "../global/totop";

export default function Careers() {
    return <>
        <Navigation/>
        <Header/>
        <Values/>
        <Positions/>
        <ScrollToTop/>
        <Footer/>
    </>
}