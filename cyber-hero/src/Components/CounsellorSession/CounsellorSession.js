/*import React from 'react'; */
import './CounsellorSession.css';
/*import {myfunction } from './nav.js' */
import React, { Component } from 'react';
//import { GOOGLE_AUTH_URL, FACEBOOK_AUTH_URL, GITHUB_AUTH_URL, ACCESS_TOKEN, API_BASE_URL } from '../../constants';
//import { login } from '../../util/APIUtils';
import { Link, Navigate } from 'react-router-dom'
import axios from 'axios';

class CounsellorSession extends Component {
    constructor(props) {
        super(props);

        this.state={
            link: '',
            id: ''
        }

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

     

            axios.post(`http://localhost:8080/counselSession/saveCounselSession`, {
                msg: this.state.msg,
                id: '0',
                name: 'Junayed'
        

        }).then(res => {
            console.log(res);
            return <Navigate
                to={{
                pathname: "",
                state: { from: this.props.location }
            }}/>; 
        })
    
    }


    //constructor(props){
    //    super(props)
    //}

    //state={
    //    appointments: []
   // }

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
                        <li class="box"><a href="/dochome">Home</a></li>
                            <li class="box"><a href="/appreq">Appointment Requests</a></li>
                            <li class="box"><a href="/app">Appointments</a></li>
                            <li class="box"><a href="/hprofile">Profile</a></li>
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

                    
                        return (
                            <div className="profile-info1">

                                <div className="profile-name">
                                    <p> Time: &ensp; </p>
                                    <p> Date: &ensp; </p>
                                    <p> Meet Link: &emsp; </p>
                                </div>

                                <div className='btns'>
                                    <div><button className="assigned-button"><a>Join</a></button></div>
                                </div>
                            </div>)
                
                    </div>
            


                </div>
             
        )
        }
}

export default CounsellorSession;


