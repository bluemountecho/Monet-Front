import React from 'react';

class SubscribeFooter extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
        <div className="subscribe-footer">
            <div className="content">
                <table className="mb-30">
                    <tbody>
                        <tr>
                            <td colSpan="3">
                                <h1>THE HOTTEST APP ON THE MARKET</h1>
                                <h5 className="mb-30">The First Stages of Our Journey</h5>
                                <p className="width-60 auto-div">Every groundbreaking App begins with a series of small ideas that are combined into an all inclusive one. At Monetizer , we wanted to change how consumers see the concept of Online Payments, by offering a simple and user-friendly platform they can trust. Our team of incredibly bright minded individuals have dedicated an immense amount of time and effort to ensure that your Mobile Credit Card Processing is easier than ever.</p>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="3">
                                <div className="mt-50">
                                    <h3>Subscribe Form</h3>
                                </div>
                                <div className="width-40 auto-div">
                                    <form>
                                        <input className="form-control" type="text" placeholder="Email Address" pattern="^.+@.+\.[a-zA-Z]{2,63}$" required />
                                        <button className="form-control">Submit</button>
                                    </form>
                                </div>
                                <h1>OUR FEATURES</h1>
                                <h5>Unlimited Access is a Download Away</h5>
                            </td>
                        </tr>
                        <tr>
                            <td className="pd-20 vertical-top">
                                <img className="feature-icon" src="/assets/images/cloud-sync.svg" />
                                <h3>AUTO-SYNC</h3>
                                <p>We always say we’re going to make a difference, but are you really ready to change your life for the better? If so, we’ve got just the thing you’ve been missing. Monetizer allows users to enjoy a wide range of options with one innovative solution. This feature makes the use of our App easier than any App you’ve ever used before. Simply download Monetizer now and start using it right away.</p>
                            </td>
                            <td className="pd-20 vertical-top">
                                <img className="feature-icon" src="/assets/images/edit.svg" />
                                <h3>PERSONALIZED CONTENT</h3>
                                <p>Everyone knows how much of a hassle it can be to manage your life online, let alone in real life. Monetizer is a fully integrated platform that allows users to enjoy a wide range of featured options for their daily needs. Our App offers several features to users worldwide, and makes it easy to navigate between accounts. Download Monetizer today and see what it can do for you.</p>
                            </td>
                            <td className="pd-20 vertical-top">
                                <img className="feature-icon" src="/assets/images/share.svg" />
                                <h3>SHARE TO SOCIAL</h3>
                                <p>Monetizer is the App you have always wanted but never knew existed up till now. Our innovative solution can tackle all your daily needs no matter where you are. Our friendly platform guarantees all users enjoy a variety of options once they’ve downloaded the App. Don’t wait another minute — check out what else Monetizer has to offer!</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        )
    }
}

export default SubscribeFooter;