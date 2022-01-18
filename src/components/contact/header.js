import React from "react";
import ContactForm from "./form";
import Tabs from "./tabs";

export default function Header() {
    return <>
         <section className="contact-header">
                <div className="container">
                    <h1> 
                        Let's <span className="color-highlight-sec">Chat</span>
                    </h1>  
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <Tabs/>
                    </div>
                    <div className="col-lg-8">
                        <ContactForm/>
                    </div>
                </div>
        </section>
    </>
}