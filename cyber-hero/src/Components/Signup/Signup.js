import React, { Component } from 'react';
import './Signup.css';
//import { GOOGLE_AUTH_URL, FACEBOOK_AUTH_URL, GITHUB_AUTH_URL, ACCESS_TOKEN } from '../../constants';
//import { login } from '../../util/APIUtils';
import { Link, Navigate } from 'react-router-dom'
import axios from 'axios';

class Signup extends Component {
    render() {
        //if(localStorage.getItem(ACCESS_TOKEN)) {
        //    return <Redirect
        //       to={{
        //        pathname: "/phome",
        //        state: { from: this.props.location }
        //    }}/>;            
        //}

        return (
            <div className='bg'>
                <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css'></link>
                <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css' />
                <link rel='stylesheet' href='./Login.css' />
                <script src='https://cdnjs.cloudflare.com/ajax/libs/react/16.12.0/umd/react.production.min.js'></script>
                <script src='https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.11.0/umd/react-dom.production.min.js'></script><script src="./script.js"></script>
               
                <div className='container1'><SignupForm /></div>
            </div>
        );
    }
}

class SignupForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            name:'',
            address:'',
            contact:'',
            age:'',
            id:'',
            usertype:'',
            password: '',
            confirmPass:''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const inputName = target.name;
        const inputValue = target.value;

        this.setState({
            [inputName]: inputValue
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        if(this.state.password === this.state.confirmPass){

            axios.post(`http://localhost:8080/users/saveuser`, {

                email: this.state.email,
                name: this.state.name,
                address: this.state.address,
                contact: this.state.contact,
                age: this.state.age,
                id: this.state.id,
                usertype: this.state.usertype,
                cPass: this.state.confirmPass,
                password: this.state.password
        

        }).then(res => {
            console.log(res);
            return <Navigate
                to={{
                pathname: "",
                state: { from: this.props.location }
            }}/>; 
        })
        }
    }
    

   // handleSubmit(event) {
   //     event.preventDefault();

   //     const loginRequest = Object.assign({}, this.state);

//        login(loginRequest)
  //          .then(response => {
    //            console.log("Access token is" + response.accessToken);
      //          localStorage.setItem(ACCESS_TOKEN, response.accessToken);
                //Alert.success("You're successfully logged in!");
               
        //        this.props.history.push("/phome")
          //      ;
            //}).catch(error => {
            
            //});
    //}

    render() {
        return (
            <div className='form-box1'>

                <div className="header-form1">
                    <h4 className="text-center"><i style={{ color: "white", fontSize: "35px" }}>SIGNUP</i></h4>
                </div>

                <div className="body-form">

                <section>
                    <select class="selectUser" onChange={this.handleInputChange} value={this.state.usertype}>
                        <option value="User">Normal User</option>
                        <option value="Counsellor">Counsellor</option>
                        <option value="Security">Security</option>
                    </select>
                </section>

                    <form onSubmit={this.handleSubmit}>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fa fa-user"></i></span>
                            </div>
                            <input name="name" type="text" className="form-control" placeholder="Username" value={this.state.name} onChange={this.handleInputChange}  />
                        </div>

                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fa fa-user"></i></span>
                            </div>
                            <input name="id" type="text" className="form-control" placeholder="NID" value={this.state.id} onChange={this.handleInputChange}  />
                        </div>

                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fa fa-user"></i></span>
                            </div>
                            <input name="email" type="email" className="form-control" placeholder="Email" value={this.state.email} onChange={this.handleInputChange}  />
                        </div>

                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fa fa-user"></i></span>
                            </div>
                            <input name="contact" type="text" className="form-control" placeholder="Contact" value={this.state.contact} onChange={this.handleInputChange}  />
                        </div>

                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fa fa-user"></i></span>
                            </div>
                            <input name="address" type="text" className="form-control" placeholder="Address"  value={this.state.address} onChange={this.handleInputChange} />
                        </div>

                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fa fa-user"></i></span>
                            </div>
                            <input name="age" type="text" className="form-control" placeholder="Age" value={this.state.age} onChange={this.handleInputChange}  />
                        </div>

                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fa fa-lock"></i></span>
                            </div>
                            <input name="password" type="password" className="form-control" placeholder="Password" value={this.state.password} onChange={this.handleInputChange} />
                        </div>
                        
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fa fa-lock"></i></span>
                            </div>
                            <input name="confirmPass" type="password" className="form-control" placeholder="Confirm Password" value={this.state.confirmPass} onChange={this.handleInputChange} />
                        </div>

                        <div className="SignupButton">
                            <button type="submit" className="btn btn-secondary btn-block">SIGN UP</button>
                        </div>
                        <div className="SignupMessage">
                            <div><a href="/login">Already have an account? LOGIN</a></div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Signup