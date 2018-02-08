import React from 'react';
import Header from './Header';
import About from './About';
import PetList from './PetList';
import Error404 from './Error404';
import NavBar from './NavBar';
import { Switch, Route } from 'react-router-dom';
import Background from '../assets/images/background.jpg';


function App(){
  return (
    <div className="container">
      <style jsx global>{`
        body {
          font-family: Verdana, Arial, Helvetica, sans-serif;
          background-image: url(${Background});
          background-attachment: fixed;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover
        }
      `}</style>
      <Header />
      <NavBar />
      <br></br>
      <br></br>
      <br></br>
      <Switch >
        <Route exact path='/' component={About} />
        <Route path='/pets' component={PetList} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
