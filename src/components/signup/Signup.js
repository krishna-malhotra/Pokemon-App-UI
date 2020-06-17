import React , {Component} from 'react';
import axios from 'axios';
import {Link, Redirect} from 'react-router-dom';


 class Signup extends Component {

    constructor(props){
        super(props);


    this.state = {
        name: '',
        email: '',
        password: '',
        mobileNo: '',
        gender:'female',
    }
}

handleAll = (event) => {
    this.setState( {[event.target.name] : event.target.value} )
}

handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    const password = this.state.password;
    const email = this.state.email;
    if(password.length<5)
    {
        alert("Password can not be less than 5")
     }

     if(!email.includes("@"))
        alert("Email not valid");


    axios.post("http://localhost:2019/addUser", this.state)
    .then( res => {
        alert(res.data);
    })
    .catch( err => {
        console.log(err);
    })

    this.props.history.push("/login");

}
    render () {
        
        
        return (
            <div>
                
                <div className="col-md-6 offset-sm-3 mt-5 text-left"> 

                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label className="text-dark">Name</label>
                            <input className="form-control" type="text" name="name" value={this.state.name} onChange={this.handleAll}/>
                        </div>
                        <div className="form-group">
                            <label className="text-dark">Email</label>
                            <input className="form-control" type="text" name="email" value={this.state.email} onChange={this.handleAll} />
                        </div>
                        <div className="form-group">
                            <label className="text-dark">Password</label>
                            <input className="form-control" type="password" name="password" value={this.state.password} onChange={this.handleAll} />
                        </div>
                        <div className="form-group">
                            <label className="text-dark">Mobile No.</label>
                            <input className="form-control" type="text" name="mobileNo" value={this.state.mobileNo}  onChange={this.handleAll}/>
                        </div>
                        <div className="form-group">
                            <label className="text-dark">Gender</label>
                            <select value={this.state.gender} name="gender" onChange={this.handleAll} className="form-control">
                                <option value="female"> Female </option>
                                <option value="male"> Male </option>
                            </select>
                        </div>
                        <button className="btn btn-success btn-block">Submit</button>
                    </form>
                </div>
               
                </div>
        )
    }
}

export default Signup;