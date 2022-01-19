import React from 'react';
import { Link } from 'react-router-dom';
import ScrollToTop from '../Utils/ScrollTop';

class MenuFooter extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
        <div className="menu-footer">
            <div className="content">
                <div className="text-align-center desktop-div">
                    <ScrollToTop />
                    <Link className="footer-menu-link" to='/'>HOME</Link>
                    <Link className="footer-menu-link" to='/announcements'>Announcements</Link>
                    <Link className="footer-menu-link" to='/about'>About</Link>
                    <Link className="footer-menu-link" to='/community'>Community</Link>
                    <Link className="footer-menu-link" to='/contact'>Contact</Link>
                </div>
                <div className="text-align-center mobile-div">
                    <ScrollToTop />
                    <Link className="footer-menu-link" to='/'>HOME</Link><br/>
                    <Link className="footer-menu-link" to='/announcements'>Announcements</Link><br/>
                    <Link className="footer-menu-link" to='/about'>About</Link><br/>
                    <Link className="footer-menu-link" to='/community'>Community</Link><br/>
                    <Link className="footer-menu-link" to='/contact'>Contact</Link>
                </div>
            </div>
        </div>
        )
    }
}

export default MenuFooter;