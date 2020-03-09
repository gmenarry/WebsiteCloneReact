import React, { Component } from 'react'
import one from '../images/1.jpg'
import two from '../images/2.jpg'
import three from '../images/3.jpg'
import four from '../images/4.jpg'
import five from '../images/5.jpg'

class Main extends Component {
    render() {
        return (
            <div>
                <img className="landingImg" src={one}></img>
                <h1 className="welcome">Welcome To Jennor</h1>
                <h2 className="pWelcome">"creative solutions that produce innovative design to meet our clients' business objectives"</h2>
                <span className="spanImg">
                    <img src={two}></img>
                    <img src={three}></img>
                </span>
                <span className="spanImg2">
                    <img src={four}></img>
                    <img src={five}></img>
                </span>
                <h2 className="atJennor">At Jennor UK, we understand that your office is more than simply a place to do business. A well-designed environment can motivate your employees, connect them to your brand and increase productivity.</h2>
                <h2 className="inspire">Our in-house team has the knowledge and passion to create commercial spaces that not only look outstanding, they improve business performance. With over 30 years of experience, our success is built on having a clear understanding of our clients’ businesses, their aims and the needs of the people who work there. We believe in real collaboration, supporting our clients at every stage of a project, from workplace consultancy to design, construction and fit-out, so they feel truly inspired.</h2>
                <div className="allCaseStudy">
                    <span>
                        <a className="our">OUR</a> 
                        <b className="caseStudy">CASE STUDIES</b>
                    </span>
                </div>
            </div>
        )
    }
}

export default Main