import React from "react";
import Rosa from "react-on-scroll-animation";

export default function Vision() {
    return <>
    <Rosa animation={'fade-up-left'}>
        <section className="vision container">
            <h2> 
                Our <span className="color-highlight"> Journey</span>
            </h2>

            <div id="timeline-content">
                <ul class="timeline">
                    <li class="event" data-date="2013">
                        <h3>Metro Started</h3>
                        <p>Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua! Donec id elit non mi porta diam eget risus varius gravida at eget metus!</p>  
                    </li>
                    <li class="event" data-date="2015">
                        <h3>Metro Launched Facebook</h3>
                        <p>Maecenas sed diam eget risus varius blandit. Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>   
                    </li>
                    <li class="event" id="date" data-date="2018">
                        <h3>Metro Hired Lead Dev Phil Gates</h3>
                        <p>Donec id elit non mi porta gravida at eget metus sed diam eget risus varius blandit.</p>      
                    </li>
                    
                    <li class="event" data-date="2022">
                        <h3>Metro Today</h3>
                        <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua! Donec id elit non mi porta diam eget risus varius gravida at eget metus!</p>  
                        <p>Donec id elit non <em><strong className="mark">100% eget</strong></em> metus sed diam eget risus varius blandit.</p> 
                        <p>Maecenas sed diam eget risus varius blandit. Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p> 
                    </li>
                </ul>

                </div>
    </section>
    </Rosa>
</>
}