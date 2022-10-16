import React from 'react';
import { NavLink } from 'react-router-dom';

class Header extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            showMenu: false
        }
    }

    render() {
        return (
        <div className="header">
            <div className="content">
                <div className="desktop-div">
                    <table className="header-table">
                        <tbody>
                            <tr>
                                <td rowSpan="2" className="header-icon-td vertical-top"><img src="/assets/images/MonetizerIcon.png"/></td>
                                <td className="header-title-td"><div className="header-title" style={{ position: "absolute", top: "8px" }}>MONET</div></td>
                                <td><NavLink  className="header-button" activeclassname='active' exact to='/'>HOME</NavLink ></td>
                                <td><NavLink  className="header-button" activeclassname='active' to='/announcements'>Announcements</NavLink ></td>
                                <td><NavLink  className="header-button" activeclassname='active' to='/about'>About</NavLink ></td>
                                <td><NavLink  className="header-button" activeclassname='active' to='/community'>Community</NavLink ></td>
                                <td><a className="header-button" href="/assets/pdf/Monet_Whitepaper.pdf" target="_blank">Whitepaper</a></td>
                            </tr>
                            <tr>
                                <td colSpan="4" className="text-left"><h3 className="color-green3">BSC: Coming Soon!</h3></td>
                                <td><NavLink  className="header-button margin-top--30" activeclassname='active' to='/faq'>FAQ</NavLink ></td>
                                <td><a className="header-button margin-top--30" activeclassname='active' href='https://www.mtztoken.com/demo' target="_blank">Demo</a ></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="mobile-div">
                    <div className="logo-div">
                        <img src="/assets/images/MonetizerIcon.png"/>
                        <div className="header-title">MONET</div>
                    </div>
                    <img className="menu-icon" src="/assets/images/menu.svg" onClick={e => {
                        this.setState({
                            showMenu: !this.state.showMenu
                        })
                    }} />
                    {this.state.showMenu == true &&
                    <div className="header-menu">
                        <h3 className="color-green3">BSC: Coming Soon!</h3>
                        <NavLink  className="header-button" activeclassname='active' exact to='/'>HOME</NavLink >
                        <NavLink  className="header-button" activeclassname='active' to='/announcements'>Announcements</NavLink >
                        <NavLink  className="header-button" activeclassname='active' to='/about'>About</NavLink >
                        <NavLink  className="header-button" activeclassname='active' to='/community'>Community</NavLink >
                        <NavLink  className="header-button" activeclassname='active' to='/contact'>Contact</NavLink >
                        <a className="header-button" href="/assets/pdf/Monet_Whitepaper.pdf" target="_blank">Whitepaper</a>
                        <NavLink  className="header-button" activeclassname='active' to='/faq'>FAQ</NavLink >
                        <a className="header-button" activeclassname='active' href='https://www.mtztoken.com/demo' target="_blank">Demo</a >
                    </div>}
                </div>
            </div>
        </div>
        )
    }
}

export default Header;