import React from 'react';

class MeetTheTeam extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
        <div className="faq-footer">
            <div className="content pb-100">
                <div className="desktop-div">
                    <table>
                        <tbody>
                            <tr>
                                <td colSpan="2">
                                    <h1 className="color-bright-green mb-100">MEET THE TEAM</h1>
                                </td>
                            </tr>
                            <tr>
                                <td className="vertical-top">
                                    <div className="faq-title">
                                        <h3 className="color-bright-green">MICHAEL A PERSIN</h3>
                                    </div>
                                    <div className="faq-content">
                                        <p className="color-bright-green">Founder and spearhead of this project. Michael has 5 years experience in information security and computer networking, and has been involved in computers since the age of 8.</p>
                                        <p className="color-bright-green">Linked In: </p>
                                    </div>
                                </td>
                                <td className="vertical-top">
                                    <div className="faq-title">
                                        <h3 className="color-bright-green">Jin Jin</h3>
                                    </div>
                                    <div className="faq-content">
                                        <p className="color-bright-green">Founder and spearhead of this project. Michael has 5 years experience in information security and computer networking, and has been involved in computers since the age of 8.</p>
                                        <p className="color-bright-green">Linked In: <a target="_blank" className="color-bright-green" href="https://www.linkedin.com/in/zhen-zhen-3ba24b225">https://www.linkedin.com/in/zhen-zhen-3ba24b225</a></p>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="mobile-div pd-20">
                    <h1 className="color-bright-green mb-100">MEET THE TEAM</h1>
                    <h3 className="color-bright-green text-justify">MICHAEL A PERSIN</h3>
                    <p className="color-bright-green text-justify">Founder and spearhead of this project. Michael has 5 years experience in information security and computer networking, and has been involved in computers since the age of 8.</p>
                    <p className="color-bright-green">Linked In: </p>
                    <h3 className="color-bright-green">Jin Jin</h3>
                    <p className="color-bright-green text-justify">Founder and spearhead of this project. Michael has 5 years experience in information security and computer networking, and has been involved in computers since the age of 8.</p>
                    <p className="color-bright-green text-justify">Linked In: <a target="_blank" className="color-bright-green" href="https://www.linkedin.com/in/zhen-zhen-3ba24b225">https://www.linkedin.com/in/zhen-zhen-3ba24b225</a></p>
                </div>
            </div>
        </div>
        )
    }
}

export default MeetTheTeam;