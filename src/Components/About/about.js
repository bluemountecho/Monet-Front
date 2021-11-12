import React from "react";

class About extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="content-body">
                <div className="content">
                    <div className="width-60 text-align-center auto-div">
                        <h1>WHO WE ARE</h1>
                        <h5>Your Solution to Making Life Simple</h5>
                        <p className="mt-50">Since 2000, Monetizer has been making users’ lives easier by offering a wide range of services through its extensive platform. We believe that there’s a fast solution to everything — and with 10 App experts committed to simplifying the user experience, Monetizer guarantees life changing results that last. What started off as an App to tackle one specific industry, has turned into an automated and intricate development that managed to make a breakthrough in the industry. Start your journey with us and simplify your life today!</p>
                    </div>
                    
                </div>
                <div className="flex-div mt-50">
                    <img src="/assets/images/about.webp" />
                </div>
            </div>
        )
    }
}

export default About;