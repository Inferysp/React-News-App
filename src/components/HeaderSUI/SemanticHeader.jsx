import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import './SemanticHeader.css';
import logo from '../grafika/avatar-lizzy.jpg';

class SemanticHeader extends Component {

  render() {
    return (
      <Menu className='MenuSUI'>
        <Menu.Item name='Back to Home' id="myLogo-container-item-menu">
          <Link to="/Contact"><img src={logo} className="myLogo" alt="Inferysp-logo" title="Inferysp-logo" /></Link>
        </Menu.Item>

        <Menu.Item name='Home'>
          <Link to="/"><button className="ui inverted button">All-news</button></Link>
        </Menu.Item>

        <Menu.Item name='Nasa-news'>
          <Link to="/Nasa-news"><button className="ui inverted button">Nasa-news</button></Link>
        </Menu.Item>

        <Menu.Item name='Contact'>
          <Link to="/Contact"><button className="ui inverted button">Contact</button></Link>
        </Menu.Item>
      </Menu>
    )
  }
};

export default SemanticHeader;