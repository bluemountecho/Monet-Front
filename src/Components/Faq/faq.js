import React from "react";
import axios from 'axios'
import {Parser} from 'html-to-react'

const htmlToReactParser = new Parser()
const baseURL = "https://www.mtztoken.com/api"

class Faq extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            faqs: []
        }
    }

    componentDidMount() {
        axios.get(baseURL + '/getfaqs')
        .then((res) => {
            this.setState({
                faqs: res.data
            })
        })
    }

    render() {
        return (
            <div className="content-body" style={{padding: '0px'}}>
                <div className="content">
                    <div className="width-80 mobile-width-100 text-align-center auto-div" style={{background: 'var(--color-green8)', padding: '30px 10% 60px'}}>
                        <h1 style={{margin: '0px 0px 50px'}}>FAQ</h1>
                        {this.state.faqs.map((faq, index) => {
                            return <>
                                <h5 className="text-left" style={{fontWeight: 'bolder'}}>⬤&nbsp;&nbsp;&nbsp;{faq.faq_title}</h5>
                                <p className="text-left" style={{paddingLeft: '30px', marginTop: '0px'}}>○&nbsp;&nbsp;&nbsp;{htmlToReactParser.parse(faq.faq_description)}</p>
                            </>
                        })}
                    </div>
                </div>
                <div style={{background: 'var(--color-green3)'}}>
                    <img src="/assets/images/about.webp" style={{opacity: '0.3'}} />
                </div>
            </div>
        )
    }
}

export default Faq;