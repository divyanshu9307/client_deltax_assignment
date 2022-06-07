
import React from 'react'
import Header from './components/Header';
import Topsongs from './components/Topsongs';
import Header1 from './components/Header1';
import Header2 from './components/Header2';
import Song from './components/Song';
import Newsong from './subpages/Newsong';
import despacitoo from "./images/despacito.jpg";
import arcadee from "./images/arcade.jpg"
import aree from "./images/are you with me.jpg"
import duskk from "./images/dusk till dawn.jpg"
import nightt from "./images/night we met.jpg"
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
            dateOfRelease="august 28,2018"
            Artist="Shawn Mendes"
          />
           <Song
            Artwork={arcadee}
            song="arcade"
            dateOfRelease="july 7,2019"
            Artist="Duncan Laurence"
          />
           <Song
            Artwork={aree}
            song="are you with me"
            dateOfRelease="june 18,2018"
            Artist="Lost Frequencies"
          />
           <Song
            Artwork={duskk}
            song="senorita"
            dateOfRelease="may 3,2018"
            Artist="zayn malik"
          />
           <Song
            Artwork={nightt}
            song="senorita"
            dateOfRelease="may 25,2018"
            Artist="Lord Huron"
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