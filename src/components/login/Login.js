import React, {Component} from 'react';
import axios from 'axios';


class Login extends Component {

    constructor(props){
        super(props);


        this.state = {
            email: '',
            password: ''
        }
    }

    handleAll = event => {
        this.setState( {[event.target.name]: event.target.value} )
    }

    handleSubmit = event => {
        event.preventDefault();
        const username = event.target.email;
        
            axios.post("http://localhost:2019/authenticate",this.state)
            .then(res => res.data)
            .then(res => {
                if(res){
                    console.log(res);
                    sessionStorage.setItem("username",res.email);
                    const authString = 'Basic '+ btoa(res.email+":"+res.password);
                    sessionStorage.setItem("basicAuth",authString);
                    axios.defaults.headers.common['Authorization'] = sessionStorage.getItem("basicAuth");
                    this.props.history.push("/dashboard")
                }else{
                    alert("No user found!");
                }
            })
            .catch(err => {
                console.log(err);
            })
    }
    render() {
        return (
            <div>
               <div className="col-md-6 offset-sm-3 mt-5 text-left"> 

                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label className="text-dark">Email</label>
                        <input className="form-control" type="text" name="email" value={this.state.email} onChange={this.handleAll}/>
                    </div>
                    <div className="form-group">
                        <label className="text-dark">Password</label>
                        <input className="form-control" type="password" name="password" value={this.state.password} onChange={this.handleAll} />
                    </div>
                    <button className="btn btn-block btn-success" > Log in </button>
                    </form>
                    </div>
            </div>
        )
    }
}

export default Login;