import React, { Component } from 'react';
import './Login.css';
import { Link, Redirect } from 'react-router-dom'

class Login extends Component {
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
               
                <div className='container'><LoginForm /></div>
            </div>
        );
    }
}

class LoginForm extends Component {
    

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
            <div className='form-box'>

                <div className="header-form">
                    <h4 className="text-center"><i style={{ color: "white", fontSize: "35px" }}>LOG IN</i></h4>
                </div>

                <div className="body-form">

                    <form>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fa fa-user"></i></span>
                            </div>
                            <input name="email" type="email" className="form-control" placeholder="Email"   />
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fa fa-lock"></i></span>
                            </div>
                            <input name="password" type="password" className="form-control" placeholder="Password"  />
                        </div>
                        <div className="SignupButton">
                            <button type="submit" className="btn btn-secondary btn-block">SIGN IN</button>
                        </div>
                        <div className="message">
                            <div><input type="checkbox" /> Remember ME</div>
                            <div><a href="#">Forgot Password</a></div>
                        </div>
                        <div className='or'>
                            <a>------------ OR USE ------------</a>
                        </div>
                        <div className="social">
                           
                            {/* <a ><i className="fab fa-google"></i></a>
                            <a ><i className="fab fa-facebook"></i></a> */}
                        </div>
                        <div className="SignupMessage">
                            <div><a href="/signup">Don't have an account? SIGNUP</a></div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login
