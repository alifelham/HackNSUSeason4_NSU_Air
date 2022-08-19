import './CounsellorProfile.css';
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'

class CounsellorProfile extends Component {
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
                            <li class="box"><a href="/pharmahome">Home</a></li>
                            <li class="box"><a href="/medreq">Counselling Request</a></li>
                            <li class="box"><a href="/medreq">Counselling Sessions</a></li>
                            <li class="box"><a href="/pharmaprofile">Profile</a></li>
                            <li><button className="logout-button"><a onClick={this.props.onLogout}>Logout</a></button></li>
                        </ul>
                        <div style={{ clear: 'both' }} />
                    </div>

                   

                </nav>

                    <div className="profile-container">
                     <h1>User Information:</h1>
                            <div className="profile-info">
                               
                 
                                <div className="profile-name">
                                    <p> Username: &ensp; {}</p>
                                    <p> ID: &emsp; {}</p>
                                    <p> Age: &emsp; {}</p>
                                    <p > Email: &emsp; &emsp; &ensp; {}</p>
                                    <p> Contact: &emsp; {}</p>
                                    <p> Address:  &emsp; {/*this.props.currentUser.address*/}</p>
                                </div>
                            </div>
                    </div>


                </div>
    );
    }
}

export default CounsellorProfile;



