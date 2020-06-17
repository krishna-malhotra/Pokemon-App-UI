import React , { Component } from 'react';
import {Route, Redirect} from 'react-router-dom';

export const ReRoute = ({ component: Component, ...rest}) => (
    <Route 
        {...rest}
        render = { props => sessionStorage.getItem("username") ? (
            <Redirect to={{
                pathname: "/dashboard",
                state: { from: props.location}
            }} />
           
        ) : (
            <Component {...props} />
        )
    } />
)

export default ReRoute;