import './EmergencyReq.css';
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'

class EmergencyReq extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='bg'>
                <meta charSet="UTF-8" />
                <title></title>
                <link rel="stylesheet" href="./HomepagePatient.css" />

                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
                <link href='https://fonts.googleapis.com/css?family=Readex Pro' rel='stylesheet'></link>
                
             
                <nav className="navb"><div className="main_list" id="mainListDiv">
                <ul>
                            <li class="box"><a href="/emergency">Home</a></li>
                            <li class="box"><a href="/counsel">Counselling</a></li>
                            <li class="box"><a href="/usersession">Session</a></li>
                            <li class="box"><a href="/complain">Complain</a></li>
                            <li class="box"><a href="/userprofile">Profile</a></li>
                            <li class="box"><a href="/selfhelp">Self Help</a></li>
                            <li><button className="logout-button"><a onClick={this.props.onLogout}>Logout</a></button></li>
                        </ul>
                        <div style={{ clear: 'both' }} />
                    </div>

                   

                </nav>

                    <div className="profile-container">
                     
                            <div className="profile-info">
                               
                            <h1>Emergency Help:</h1>
                            <div className="input-group-prepend">
                            <p>Press to get Emergency Help:</p>
                                <span className="input-group-text"><i className="fa fa-user"></i></span>
                            </div>
                            <button className="reqbutton"><a onClick={this.props.onLogout}>REQUEST</a></button>
                            </div>
                    </div>


                </div>
    );
    }
}

export default EmergencyReq;



