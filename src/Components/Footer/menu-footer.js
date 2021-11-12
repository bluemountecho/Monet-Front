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
                <div className="text-align-center">
                    <ScrollToTop />
                    <Link className="footer-menu-link" to='/'>HOME</Link>
                    <Link className="footer-menu-link" to='/blog'>Blog</Link>
                    <Link className="footer-menu-link" to='/about'>About</Link>
                    <Link className="footer-menu-link" to='/updates'>Updates</Link>
                    <Link className="footer-menu-link" to='/for-content-creators'>For Content Creators</Link>
                    <Link className="footer-menu-link" to='/for-businesses'>For Businesses</Link>
                    <Link className="footer-menu-link" to='/community'>Community</Link>
                    <Link className="footer-menu-link" to='/contact'>Contact</Link>
                </div>
            </div>
        </div>
        )
    }
}

export default MenuFooter;