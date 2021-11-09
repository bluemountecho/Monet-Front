import React from 'react';

class FaqFooter extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
        <div className="faq-footer">
            <div className="content">
                <table>
                    <tbody>
                        <tr>
                            <td colSpan="2">
                                <h1 className="color-bright-green mb-100">FREQUENTLY ASKED QUESTIONS</h1>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="faq-title">
                                    <h3 className="color-bright-green">I’VE SEEN OTHER APPS THAT SERVE SIMILAR PURPOSES. WHAT MAKES YOURS THE BEST?</h3>
                                </div>
                                <div className="faq-content">
                                    <p className="color-bright-green">Enter the Answer to your Question here. Be thoughtful with your answer, write clearly, and consider adding examples. This can help your visitors get the help they need quickly and easily.</p>
                                </div>
                            </td>
                            <td>
                                <div className="faq-title">
                                    <h3 className="color-bright-green">HOW OFTEN ARE THERE UPDATES TO THE APP?</h3>
                                </div>
                                <div className="faq-content">
                                    <p className="color-bright-green">Enter the Answer to your Question here. Be thoughtful with your answer, write clearly, and consider adding examples. This can help your visitors get the help they need quickly and easily.</p>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="faq-title">
                                    <h3 className="color-bright-green">IT ALL SOUNDS GREAT, BUT WHAT DOES THIS APP ACTUALLY DO?</h3>
                                </div>
                                <div className="faq-content">
                                    <p className="color-bright-green">Enter the Answer to your Question here. Be thoughtful with your answer, write clearly, and consider adding examples. This can help your visitors get the help they need quickly and easily.</p>
                                </div>
                            </td>
                            <td>
                                <div className="faq-title">
                                    <h3 className="color-bright-green">I’VE SEEN OTHER APPS THAT SERVE SIMILAR PURPOSES. WHAT MAKES YOURS THE BEST?</h3>
                                </div>
                                <div className="faq-content">
                                    <p className="color-bright-green">Enter the Answer to your Question here. Be thoughtful with your answer, write clearly, and consider adding examples. This can help your visitors get the help they need quickly and easily.</p>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        )
    }
}

export default FaqFooter;