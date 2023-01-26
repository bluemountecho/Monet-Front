import React from 'react';

class Home extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="content-home-body">
                <div className="content">
                    <div className="desktop-div">
                        <table>
                            <tbody>
                                <tr>
                                    <td className="width-40 ptb-40">
                                        <span className="home-title">SECURING THE FINANCIAL FUTURE FOR CONTENT CREATORS</span>
                                        <a href="/assets/pdf/Monet_Whitepaper.pdf" className="read-whitepaper auto-div" target="_blank">Read The Whitepaper</a>
                                        <a href="https://demo.mtztoken.com" className="read-whitepaper auto-div margin-top-10" target="_blank">Try the Demo</a>
                                        <h3 className="color-green7">Join the Community</h3>
                                        <div>
                                            <a className="social-icon" href="https://twitter.com/MtzMonet" target="_blank"><img src="/assets/images/twitter.svg" /></a>
                                            <a className="social-icon" href="https://discord.com/invite/BuMuNFX9" target="_blank"><img src="/assets/images/discord.svg" /></a>
                                            <a className="social-icon" href="https://t.me/monetofficial" target="_blank"><img src="/assets/images/telegram.svg" /></a>
                                            <a className="social-icon" href="https://truthsocial.com/@MonetMTZ" target="_blank"><img src="/assets/images/trust_social.webp" /></a>
                                            <a className="social-icon" href="https://gettr.com/user/monetmtz" target="_blank"><img src="/assets/images/gettr.webp" /></a>
                                            <a className="social-icon" href="https://www.minds.com/monetmtz" target="_blank"><img src="/assets/images/minds.webp" /></a>
                                        </div>
                                    </td>
                                    <td>
                                        <img src="/assets/images/monetizecoin.webp" />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="mobile-div">
                        <img src="/assets/images/monetizecoin.webp" />
                        <span className="home-title">SECURING THE FINANCIAL FUTURE FOR CONTENT CREATORS</span>
                        <a href="/assets/pdf/Monet_Whitepaper.pdf" className="read-whitepaper auto-div" target="_blank">Read The Whitepaper</a>
                        <a href="https://demo.mtztoken.com" className="read-whitepaper auto-div margin-top-10" target="_blank">Try the Demo</a>
                        <h3 className="color-green7">Join the Community</h3>
                        <div>
                            <a className="social-icon" href="https://twitter.com/MtzMonet" target="_blank"><img src="/assets/images/twitter.svg" /></a>
                            <a className="social-icon" href="https://discord.com/invite/BuMuNFX9" target="_blank"><img src="/assets/images/discord.svg" /></a>
                            <a className="social-icon" href="https://t.me/monetofficial" target="_blank"><img src="/assets/images/telegram.svg" /></a>
                            <a className="social-icon" href="https://truthsocial.com/@MonetMTZ" target="_blank"><img src="/assets/images/trust_social.webp" /></a>
                            <a className="social-icon" href="https://gettr.com/user/monetmtz" target="_blank"><img src="/assets/images/gettr.webp" /></a>
                            <a className="social-icon" href="https://www.minds.com/monetmtz" target="_blank"><img src="/assets/images/minds.webp" /></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;