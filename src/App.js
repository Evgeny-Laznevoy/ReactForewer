import React from 'react';
import './App.css';
import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar'
import Profile from './Components/Profile/Profile'
import Footer from './Components/Footer/Footer'
import Dialogs from './Components/Dialogs/Dialogs'
import { BrowserRouter, Route } from "react-router-dom"

function App(props) {

  // let app = props.AppState.profilePage
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Navbar />
        <div>
          <Route path='/dialogs' render={ () => <Dialogs messagePages={props.AppState.messagesPage} />} />
          <Route path='/profile' render={ () => <Profile posts={props.AppState.profilePage} />} />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
