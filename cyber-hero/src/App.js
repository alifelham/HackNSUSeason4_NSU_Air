import './App.css';
//import Login from './Components/Login/Login'
import { Component } from 'react';
import {
  Route,
  Switch, Routes
} from 'react-router-dom';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import NormalUserProfile from './Components/NormalUserProfile/NormalUserProfile';
import CounsellorProfile from './Components/CounsellorProfile/CounsellorProfile';
import SecurityProfile from './Components/Securityprofile/SecurityProfile';
import CounsellingRequest from './Components/CounsellingRequest/CounsellingRequest';
import EmergencyReq from './Components/EmergencyReq/EmergencyReq';
import MakeComplaint from './Components/MakeComplaint/MakeComplaint';

class App extends Component {
  constructor(props) {
    super(props);
  }
 //   this.state = {
 //     authenticated: false,
 //     currentUser: null,
 //     loading: true
 //   }

 //   this.loadCurrentlyLoggedInUser = this.loadCurrentlyLoggedInUser.bind(this);
 //   this.handleLogout = this.handleLogout.bind(this);
 // }

 // loadCurrentlyLoggedInUser(){
    //getCurrentUser()
    //.then(response => {

    //  this.setState({
    //    currentUser: response,
    //    authenticated: true,
    //    loading: false
    //  })
    //  }).catch(error => {
    //    this.setState({
    //      loading: false
    //    });
    //  });
   
 // }

 // handleLogout() {
 //   localStorage.removeItem(ACCESS_TOKEN);
 //   this.setState({
 //     authenticated: false,
 //     currentUser: null
 //   });
 // }

  //componentDidMount() {
  //  
  //  this.loadCurrentlyLoggedInUser();
  //}

  render() {
    //if(this.state.loading) {
      //return <LoadingIndicator />
   // }

    return (
      <div className="app">
        <Routes>
          <Route path = '/login' element={<Login/>}></Route>
          <Route path = '/signup' element={<Signup/>}></Route>
          <Route path = '/userprofile' element={<NormalUserProfile/>}></Route>
          <Route path = '/counprofile' element={<CounsellorProfile/>}></Route>
          <Route path = '/securityprofile' element={<SecurityProfile/>}></Route>
          <Route path = '/counsel' element={<CounsellingRequest/>}></Route>
          <Route path = '/emergency' element={<EmergencyReq/>}></Route>
          <Route path = '/complain' element={<MakeComplaint/>}></Route>
        </Routes>
        </div>
      );
    }
  }
  
  export default App;