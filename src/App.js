
import React from 'react'
import Header from './components/Header';
import Topsongs from './components/Topsongs';
import Header1 from './components/Header1';
import Header2 from './components/Header2';
import Song from './components/Song';
import Newsong from './subpages/Newsong';
import despacitoo from "./images/despacito.jpg";
import senoritaa from "./images/senorita.jpg"

import './App.css';

import {Switch,Route} from "react-router-dom" ;

const App = () => {
  return (
    
   <Switch>
      <Route exact path="/">
        {/* <Header />
         <Header1/>
        <Header2/> */}
        {/* <Topsongs/> */}
        <Song
            Artwork={despacitoo}
            song="despacito"
            dateOfRelease="july 10,2019"
            Artist="Luis Fonsi"
          />
           <Song
            Artwork={senoritaa}
            song="senorita"
            dateOfRelease="may 3,2018"
            Artist="Shawn Mendes"
          />
        </Route>
        <Route exact path="/newsong">
        
   
    <Song/> 
        <Newsong/>
        </Route>
   </Switch>
  )
}

export default App