import React, { Component } from 'react'

class Nav extends Component {
    render() {
        return (
            <div>
                <div className="nav">
                        <ul className="reset--list">
                            <li className="top-level">Home</li>
                            <span className="visible-lg menu">|</span>
                            <li className="top-level">About Us</li>
                            <span className="visible-lg menu">|</span>
                            <li className="top-level">Solutions</li>
                            <span className="visible-lg menu">|</span>
                            <li className="top-level">Case Studies</li>
                            <span className="visible-lg menu">|</span>
                            <li className="top-level">News</li>
                            <span className="visible-lg menu">|</span>
                            <li className="top-level">Contact Us</li>
                        </ul>
                </div>

            </div>
        )
    }
}

export default Nav