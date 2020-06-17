import React , { Component } from 'react';
import {Route, Redirect} from 'react-router-dom';

export const Authentication = ({ component: Component, ...rest}) => (
    <Route 
        {...rest}
        render = { props => sessionStorage.getItem("username") ? (
            <Component {...props} />
        ) : (
            <Redirect to={{
                pathname: "/login",
                state: { from: props.location}
            }} />
        )
    } />
)

export default Authentication;