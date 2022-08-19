/*import React from 'react'; */
import './UserSession.css';
/*import {myfunction } from './nav.js' */
import React, { Component } from 'react';
//import { GOOGLE_AUTH_URL, FACEBOOK_AUTH_URL, GITHUB_AUTH_URL, ACCESS_TOKEN, API_BASE_URL } from '../../constants';
//import { login } from '../../util/APIUtils';
import { Link, Redirect } from 'react-router-dom'
//import axios from 'axios';

var appointments =  [1,2]
class UserSession extends Component {
    constructor(props){
        super(props)
    }

    state={
        session: []
    }

   // handleCancel=(id)=>{
   //     axios.delete(`http://localhost:8080/appointment/deleteAppointmentByAID/${id}`, {
   //                     headers: {
   //                         Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`,
   //                     }}).then(res=>{
   //                         window.location.reload(false);
   //                     })
   // }

   // componentDidMount =()=>{
   //     axios.get(`http://localhost:8080/appointment/getAppointmentsByHID/${this.props.currentUser.id}`, {
   //         headers: {
   //             Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`,
   //         }
   //     }).then(res => {
   //         console.log(res);
   //         this.setState({ appointments: res.data })
   //     })
   // }

    render() {
        
        return (
            <div className='bg'>
                <meta charSet="UTF-8" />
                <title>Patient Homepage</title>
                <link rel="stylesheet" href="./HomepagePatient.css" />

                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
                <link href='https://fonts.googleapis.com/css?family=Readex Pro' rel='stylesheet'></link>


                <nav className="navb">
                        <div className="main_list" id="mainListDiv">
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

                        <div className="media_button">
                            <button className="main_media_button" id="mediaButton">
                                <span />
                                <span />
                                <span />
                            </button>
                        </div>

                    </nav>


                <div className="profile-container">
                    <div classN></div>
                    <h1>Counselling Sessions:</h1>

                    {appointments.map(appointment => {
                        return (
                            <div className="profile-info1">
                                <p>Click to join the session: </p>

                                <div className='btns'>
                                    <div><button className="assigned-button"><a href='https://meet.google.com/pav-dezq-nam'>Join</a></button></div>
                                </div>
                            </div>)
                    }) }
                    </div>
            


                </div>
             
        )
        }
}

export default UserSession;


