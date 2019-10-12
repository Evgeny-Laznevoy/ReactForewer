import React from 'react';
import './App.css';
import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar'
import Profile from './Components/Profile/Profile'
import Footer from './Components/Footer/Footer'
import { Route } from "react-router-dom"
import DialogsContainer from './Components/Dialogs/DialogsContainer';

function App(props) {
  // let app = props.AppState.profilePage
  return (
      <div className="App">
        <Header />
        <Navbar />
        <div>
          <Route path='/dialogs' render={ () => <DialogsContainer store={props.store}/>} />
          <Route path='/profile' render={ () => <Profile posts={props.store} dispatch={props.dispatch} />} />
        </div>
        <Footer />
      </div>
  );
}

export default App;
