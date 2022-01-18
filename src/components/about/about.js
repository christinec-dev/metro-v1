import React from "react";
import Navigation from "../global/navbar";
import Header from './header';
import Vision from "./vision";
import Footer from "../global/footer"
import Banner from "../home/banner";
import Team from "../home/team"
import BannerAbout from "./banner";

export default function About() {
    return <>
    <section className="about">
    <Navigation/>
        <Header/>
        <BannerAbout/>
        <Vision/>
        <Team/>
        <Banner/>
        <Footer/>

    </section>
        
    </>
}