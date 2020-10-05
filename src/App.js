import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Starbucks from './components/Starbucks';
import SoupStation from './components/SoupStation';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import Nav from './components/Nav';
import Footer from './components/Footer';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  let [avialable,setAvialable]=useState(false);

  const setUnavilable=()=>{
    setAvialable(true);
  }
  const setavilable=()=>{
    setAvialable(false);
  }
return(
     <Router>
       <Nav/>
       <Sidebar/>
       <Switch>
           <Route path="/" exact component={Main}/>
           <Route path="/star" exact component={Starbucks}/>
           <Route path="/soup" exact component={SoupStation}/>
       </Switch>
     </Router>
     );
}

export default App;
