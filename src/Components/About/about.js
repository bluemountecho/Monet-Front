import React from "react";

class About extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="content-body" style={{padding: '0px'}}>
                <div className="content">
                    <div className="width-80 text-align-center auto-div" style={{background: 'var(--color-green8)', padding: '30px 10% 60px'}}>
                        <h1 style={{margin: '0px 0px 50px'}}>About</h1>
                        <h5 style={{fontWeight: 'bold', margin: '0px'}}>Securing the Financial Future of Content Creators</h5>
                        <p style={{margin: '30px 0px 0px 0px'}}>Monet is an attempt to free content creators and businesses from shackling limitations of the advertising industry. Creators worry about what they are allowed to say and fear losing their advertising revenue. Businesses fear their affiliates may negatively impact their customer base and sales, and fear legal complications over copyright concerns.</p>
                        <p style={{margin: '30px 0px 0px 0px'}}>We currently are a small team of entrepreneurs and visionaries seeking to make this vision come true. We deeply feel with our crypto solution, both content creators and businesses will deeply benefit from our proposed solutions.</p>
                        <p style={{margin: '30px 0px 0px 0px'}}>Currently Monet is going to be a two-phase blockchain solution. The first phase is the token itself, which will run on the Binance Smart chain with future plans to operate on other blockchains. The second phase will act as the advertising platform itself, which will utilize this token to calculate rewards for the creators, and serve as a hosting platform for businesses to post their advertisements.</p>
                        <p style={{margin: '30px 0px 0px 0px'}}>Our immediate goal is to have a successful launch of this token, including a presale and an ICO. We will also launch an interactive demo for the stakeholders to get a hand of what the platform may look like once it is fully released. This demo will not interact with your crypto funds, but will act as an emulation to get an understanding of the product we are developing.</p>
                        <p style={{margin: '30px 0px 0px 0px'}}>We look forward to serving the crypto and the creator communities!</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;