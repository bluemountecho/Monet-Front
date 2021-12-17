import React from 'react';

import SubscribeFooter from './subscribe-footer';
import MeetTheTeam from './meet-the-team';
import MenuFooter from './menu-footer';

class Footer extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>
            <SubscribeFooter />
            <MeetTheTeam />
            <MenuFooter />
            </>
        )
    }
}

export default Footer;