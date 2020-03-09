import React, { Component } from 'react'
import logo from '../images/logo.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faFacebookF, faTwitter
} from '@fortawesome/free-brands-svg-icons'
import Nav from '../components/Nav'


class Header extends Component {
    render() {
        return (
            <div>
                <div className="header">
                    <img className="logo" src={logo} alt='logo'></img>
                    <span className="headerWriting">
                        For Quotations And Designs Contact Us On <b className="number">01744 730 717</b><a href="https://www.facebook.com/jennorukltd"><FontAwesomeIcon className="media" icon={faFacebookF} color="#F5A416" /></a><a href="https://twitter.com/Jennor_UK_Ltd"><FontAwesomeIcon className="media" icon={faTwitter} color="#F5A416" /></a><b className="email">Email:</b>general@jennor.co.uk
                </span>
                </div>
                <Nav></Nav>
                <hr className="top=padding-bar"></hr>
            </div>
        )
    }
}

export default Header
