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
                                <td className="width-40 pd-40">
                                    <span className="home-title">SECURING THE FINANCIAL FUTURE FOR CONTENT CREATORS</span><br/>
                                    <a href="/assets/pdf/Monet_Whitepaper.pdf" target="_blank">Read Whitepaper</a>
                                </td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Home;