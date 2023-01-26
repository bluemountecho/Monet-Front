import React from "react";

class Community extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="content-body" style={{padding: '0px'}}>
                <div className="content" style={{textAlign: 'center', padding: '50px 0px', fontFamily: "'oswald', sans-serif"}}>
                    <div style={{background: 'var(--color-green1)', maxWidth: '600px', margin: 'auto', padding: '50px 0px'}}>
                        <h1 style={{margin: '0px 0px 20px', color: 'var(--color-green3)'}}>FOLLOW US ON:</h1>
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

export default Community;