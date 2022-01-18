import React from "react";
import Footer from "../global/footer";
import Banner from "./banner";
import Header from "./header";
import Services from "./services";
import Subscribe from "./subscribe";
import Team from "./team";
import Testimonies from "./testimonies";
import Navigation from "../global/navbar"

export default function Home() {
    return <>
        <Navigation/>
        <Header/>
        <Services/>
        <Testimonies/>
        <Subscribe/>
        <Team/>
        <Banner/>
        <Footer/>
    </>
}