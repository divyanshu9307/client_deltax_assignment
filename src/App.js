
import header from './components/header';
import header1 from './components/header1';
import header2 from './components/header2';
import song from './components/song';
import newsong from './subpages/newsong';

import './App.css';
import {Switch,Route} from "react-router-dom" ;

function App() {
  return (
    <switch>
      <Route exact  path="/">
     <header/>
    <header1/>
    <header2/>
    <song/>
      </Route>
      <Route exact path="newsong">
        <newsong/>
      </Route>
     
    </switch>
    
  );
}

export default App;
