import React from "react";
import team_1 from "../global/images/team1.jpg";
import team_2 from "../global/images/team2.jpg";
import team_3 from "../global/images/team3.jpg";
import team_4 from "../global/images/team4.jpg";
import Rosa from "react-on-scroll-animation";

export default function Team() {
    return <>
    <Rosa animation={'fade-up-right'}>
        <section className="section team">
            <h2 className="text-center team-head">  
                <span className="color-highlight-sec">Our Team</span>
            </h2>
            <div className="row team">
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img src={team_1} alt="" className="team-img"/>
                            </div>
                            <div className="flip-card-back">
                                <h2 className="socials-title">Jack Doe</h2>
                                <h4 className="socials-label">CTO</h4>
                                <div className="socials">
                                    <a href=""><i class="fab fa-twitter-square"></i></a>
                                    <a href=""><i class="fab fa-linkedin"></i></a>
                                    <a href=""><i class="fab fa-github-square"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <img src={team_2} alt="" className="team-img"/>
                                </div>
                                <div className="flip-card-back">
                                    <h2 className="socials-title">Max Anton</h2>
                                    <h4 className="socials-label">Lead Developer</h4>
                                <div className="socials">
                                    <a href=""><i class="fab fa-twitter-square"></i></a>
                                    <a href=""><i class="fab fa-linkedin"></i></a>
                                    <a href=""><i class="fab fa-github-square"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <img src={team_3} alt="" className="team-img"/>
                                </div>
                                <div className="flip-card-back">
                                    <h2 className="socials-title">Jacky Neil</h2>
                                    <h4 className="socials-label">Lead Designer</h4>
                                <div className="socials">
                                    <a href=""><i class="fab fa-twitter-square"></i></a>
                                    <a href=""><i class="fab fa-linkedin"></i></a>
                                    <a href=""><i class="fab fa-github-square"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <img src={team_4} alt="" className="team-img"/>
                                </div>
                                <div className="flip-card-back">
                                    <h2 className="socials-title">Linda Mae</h2>
                                    <h4 className="socials-label">Consultant</h4>
                                <div className="socials">
                                    <a href=""><i class="fab fa-twitter-square"></i></a>
                                    <a href=""><i class="fab fa-linkedin"></i></a>
                                    <a href=""><i class="fab fa-github-square"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </section>
    </Rosa>
</>
}

