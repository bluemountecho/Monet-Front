/* eslint-disable no-undef */
import React, { Component } from "react";

const baseURL = "http://localhost:8888"

class Contact extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="content-body" style={{background: 'var(--color-green8)'}}>
                <div className="content">
                    <div className="width-80 text-align-center auto-div pb-20">
                        <h1 style={{margin: '0px'}}>GET IN TOUCH</h1>
                        <form method="post" action={baseURL + '/sendemail'}>
                            <div>
                                <input className="form-control" style={{padding: '15px 10px'}} placeholder="Enter Your Name" type="text" name="name"required />
                            </div>
                            <div>
                                <input className="form-control" style={{padding: '15px 10px'}} placeholder="Enter Your Email" type="email" name="email" required />
                            </div>
                            <div>
                                <input className="form-control" style={{padding: '15px 10px'}} placeholder="Type The Subject" type="text" name="subject" required />
                            </div>
                            <div>
                                <textarea className="form-control" style={{padding: '15px 10px'}} rows="7" placeholder="Enter Your Message Here..." name="message" required />
                            </div>
                            <button className="form-control" style={{padding: '15px 10px'}} type="submit">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;