import React, { Component } from "react";

export class HomeComponent extends Component {
    render() {
        return (
            <React.Fragment>
                <h1>Vasanthan</h1>
                <section id="sec">
                    <p class="bio"> I am a Sophomore at Saveetha Engineering College pursuing a B.Tech in Information Technology. I am deeply interested in Web and Game development, Networks, and other fields associated with Computer Science that interest me. I also did an Introductory Online Course called CS50 from Harvard University, and I plan to work as Intern in Computer Science Industry. </p>

                    <h3>
                        <u>Education:</u>
                    </h3>
                    <dl>
                        <ul>
                            <li>
                                <b>Bachelor of technology - Information Technology</b>
                            </li>
                            Saveetha Engineering College<br></br>
                            <li>
                                <b>AISSCE - Biology and Mathematics</b>
                                <em>(2019 - 2021)</em>
                            </li>
                            Velammal Vidhyashram <br></br>
                            <li>
                                <b>AISSE </b>
                                <em>(2019)</em>
                            </li>
                            Velammal Vidhyashram
                        </ul>
                    </dl>

                    <h3>
                        <u>Certification</u>
                    </h3>
                    <dl>
                        <ul>
                            <li>
                                <b>CS50x </b> <i>- Introduction to Intellectual Enterprise of Computer Science and art of Programming</i>
                            </li>
                            <i>
                                Harvard University - <em>David J. Malan</em>
                            </i>
                            <a href="https://certificates.cs50.io/3fc92a6e-4a87-4e3c-859a-a96a387f5080"> View Certificate</a>

                            <li>
                                <b>Speak English Professionally</b>{" "}
                            </li>
                            <i>Georgia Institute of Technology</i>
                            <a href="https://www.coursera.org/account/accomplishments/certificate/TRBUM7FAGYXM"> View Certificate</a>
                        </ul>
                    </dl>

                    <h3>
                        <u>Skills</u>
                    </h3>
                    <dl>
                        <ul>
                            <li> C </li>
                            <li> JavaScript </li>
                            <li> Flask (Python)</li>
                            <li> SQL </li>
                            <li> Java (Basic)</li>
                            <li> Lua </li>
                        </ul>
                    </dl>
                </section>
            </React.Fragment>
        );
    }
}

export default HomeComponent;
