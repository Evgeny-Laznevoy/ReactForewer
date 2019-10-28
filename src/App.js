import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import { Route } from "react-router-dom"
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import UsersContainer from './Components/Users/UsersContainer';
import ProfileContainer from './Components/Profile/ProfileContainer';
import HeaderContainer from './Components/Header/HeaderContainer';

function App(props) {
  return (
      <div className="App">
        <HeaderContainer />
        <Navbar />
        <div>
          <Route path='/dialogs' render={ () => <DialogsContainer store={props.store}/>} />
          <Route path='/profile/:userId' render={ () => <ProfileContainer />} />
          <Route path='/users' render={ () => <UsersContainer/>} />
        </div>
        <Footer />
      </div>
  );
}

export default App;
