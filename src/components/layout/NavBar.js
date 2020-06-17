import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import  { Link, Redirect } from 'react-router-dom';


 class NavBar extends Component {

    constructor(props ){
        super(props);
    }


    handleLogOut = (event) => {
        sessionStorage.removeItem("username");
        sessionStorage.removeItem("basicAuth");
        
        this.props.history.push("/login");
        
    }

    reach = () => {
        return this.props.location.push("/login");
    }
    render() {
        const checkUserLoggedIn = () => {
            const user = sessionStorage.getItem("username");
            if(user!==null)
                return <button className="btn btn-sm btn-outline-danger text-dark" onClick={this.handleLogOut}>Log Out</button>
            else
                return <Link to="/login"><button className="btn btn-sm btn-outline-danger text-dark" >Log In</button></Link>
        }

        const showUserFavList = () => {
            const user = sessionStorage.getItem("username");
            if(user!==null)
                return <Link to="/myPokemonsList" ><button className="btn btn-sm btn-outline-danger text-dark ml-2">My Pokemons</button></Link>
        }
        const showDashboard = () => {
            const user = sessionStorage.getItem("username");
            if(user!==null)
                return <Link to="/dashboard" ><button className="btn btn-sm btn-outline-danger text-dark ml-2">Dashboard</button></Link>
        }

        return (
            <div>
                <nav className="navbar navbar-expand-md navbar-dark fixed-top " style={{
                    backgroundColor: "#ef5350"
                }}>
              <a className="navbar-brand">Pokemon</a>

                   <ul className = "navbar-nav mr-auto">
                       <li className="nav-item">
                           {checkUserLoggedIn()}
                       </li>
                       <li className="nav-item">
                           {showUserFavList()}
                       </li>
                       <li className="nav-item">
                           {showDashboard()}
                       </li>
                   </ul>
                </nav> 
            </div>
        )
    }
}


export default withRouter(NavBar);