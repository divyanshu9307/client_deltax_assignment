
import React from 'react'
import Header from './components/Header';
import Header1 from './components/Header1';
import Header2 from './components/Header2';
import Song from './components/Song';
import Newsong from './subpages/Newsong';

import './App.css';

import {Switch,Route} from "react-router-dom" ;
const App = () => {
  return (
    
   <Switch>
      <Route exact path="/">
        <Header />
       
    
        </Route>
        <Route exact path="/newsong">
        <Header1/>
    <Header2/>
    <Song/> 
        <Newsong/>
        </Route>
   </Switch>
  )
}

export default App