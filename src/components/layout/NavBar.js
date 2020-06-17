import React, { Component } from 'react';
import styled from 'styled-components';

const NavBarStyle = styled.nav`

`;
export default class NavBar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-md navbar-dark fixed-top " style={{
                    backgroundColor: "#ef5350"
                }}>
              <a className="navbar-brand">Pokemon</a>

                   <ul className = "navbar-nav mr-auto">
                       <li className="nav-item">
                           <a className="nav-link">Log Out</a>
                       </li>
                   </ul>
                </nav> 
            </div>
        )
    }
}
