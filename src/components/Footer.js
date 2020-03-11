import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="footer">
                    <span className="title">
                        <b className="about">About Us</b><b className="contact">Contact Us</b>
                    </span>
                    <span className="allList">
                        <ul className="list">
                            <li>Office Fit Outs</li>
                            <li>Workplace Consultancy</li>
                            <li>Design</li>
                            <li>Project Management</li>
                            <li>Construction</li>
                        </ul>
                        <ul className="list2">
                            <li>Jennor UK Limited, Unit 3 - Puma Court, , Puma Court, Kings Business Park, ,</li>
                            <li>Prescot, Knowsley, Merseyside., L34 1PJ</li>
                            <li><b>Phone:</b> 01744 730 717 <b>Fax:</b> 01744 759 657 <b>Email:</b> general@jennor.co.uk</li>
                        </ul>
                    </span>
                </footer>
            </div>
        )
    }



}

export default Footer
