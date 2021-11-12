import React from 'react';
import { NavLink } from 'react-router-dom';

class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
        <div className="header">
            <div className="content">
                <table className="header-table">
                    <tbody>
                        <tr>
                            <td><img src="/assets/images/MonetizerIcon.png"/></td>
                            <td><div className="header-title">MONETIZER</div></td>
                            <td><NavLink  className="header-button" activeclassname='active' exact to='/'>HOME</NavLink ></td>
                            <td><NavLink  className="header-button" activeclassname='active' to='/blog'>Blog</NavLink ></td>
                            <td><NavLink  className="header-button" activeclassname='active' to='/about'>About</NavLink ></td>
                            <td><NavLink  className="header-button" activeclassname='active' to='/updates'>Updates</NavLink ></td>
                            <td><NavLink  className="header-button" activeclassname='active' to='/for-content-creators'>For Content Creators</NavLink ></td>
                            <td><NavLink  className="header-button" activeclassname='active' to='/for-businesses'>For Businesses</NavLink ></td>
                            <td><NavLink  className="header-button" activeclassname='active' to='/community'>Community</NavLink ></td>
                            <td><NavLink  className="header-button" activeclassname='active' to='/contact'>Contact</NavLink ></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        )
    }
}

export default Header;