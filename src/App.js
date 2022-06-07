
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
import ArtistTopPage from './subpages/ArtistTopPage';
import Artistpage from './subpages/Artistpage';

const App = () => {
  return (
    
   <Switch>
      <Route exact path="/">
        {/* <Header />
        <Topsongs/>
         <Header1/> */}
        {/* <Header2/>  */}
      
        {/* <Song
            Artwork={despacitoo}
            song="despacito"
            dateOfRelease="july 10,2019"
            Artist="Luis Fonsi"
          /> */}
           {/* <Song
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
          /> */}
          <ArtistTopPage />
        <div id="artistdesign">
        <Header2/> 
          <Artistpage
            name="Shawn Mendes"
            dob="5 April 1989"
            songslist="senorita"
          />
          <Artistpage
            name="Lord Huron"
            dob="14 June 1987"
            songslist="night we met"
          />
          <Artistpage
            name="Alan Walker"
            dob="19 july 1990"
            songslist="On My Way"
          />
          <Artistpage
            name="Duncan Laurence"
            dob="9 December 1965"
            songslist="Arcade"
          />
        </div>
        </Route>
        <Route exact path="/newsong">
        
   
    <Song/> 
        <Newsong/>
        </Route>
   </Switch>
  )
}

export default App