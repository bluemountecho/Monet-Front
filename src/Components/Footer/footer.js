import React from 'react';

import SubscribeFooter from './subscribe-footer';
import FaqFooter from './faq-footer';
import MenuFooter from './menu-footer';

class Footer extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>
            <SubscribeFooter />
            <FaqFooter />
            <MenuFooter />
            </>
        )
    }
}

export default Footer;