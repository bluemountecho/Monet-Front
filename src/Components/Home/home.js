import React from 'react';

class Home extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="content-home-body">
                <div className="content">
                    <table>
                        <tbody>
                            <tr>
                                <td className="width-40 ptb-40">
                                    <span className="home-title">SECURING THE FINANCIAL FUTURE FOR CONTENT CREATORS</span>
                                    <a href="/assets/pdf/Monet_Whitepaper.pdf" className="read-whitepaper auto-div" target="_blank">Read The Whitepaper</a>
                                    <h3 className="color-green7">Join the Community</h3>
                                    <div>
                                        <a className="social-icon" href="https://facebook.com" target="_blank"><img src="/assets/images/facebook.svg" /></a>
                                        <a className="social-icon" href="https://twitter.com" target="_blank"><img src="/assets/images/twitter.svg" /></a>
                                        <a className="social-icon" href="https://discord.com" target="_blank"><img src="/assets/images/discord.svg" /></a>
                                        <a className="social-icon" href="https://telegram.com" target="_blank"><img src="/assets/images/telegram.svg" /></a>
                                        <a className="social-icon" href="https://instagram.com" target="_blank"><img src="/assets/images/instagram.svg" /></a>
                                    </div>
                                </td>
                                <td>
                                    <img src="/assets/images/monetizecoin.webp" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Home;