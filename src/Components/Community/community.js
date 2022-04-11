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
                            <a className="social-icon" href="https://twitter.com" target="_blank"><img src="/assets/images/twitter.svg" /></a>
                            <a className="social-icon" href="https://discord.com" target="_blank"><img src="/assets/images/discord.svg" /></a>
                            <a className="social-icon" href="https://telegram.com" target="_blank"><img src="/assets/images/telegram.svg" /></a>
                            <a className="social-icon" href="https://instagram.com" target="_blank"><img src="/assets/images/instagram.svg" /></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Community;