
import header from './components/header';
import './App.css';
import {Switch,Route} from "react-router-dom" ;

function App() {
  return (
    <switch>
      <Route path="/">
      <div className="App">
     {/* <h1>Assignmnent</h1> */}
     <header></header>
    </div>
      </Route>
     
    </switch>
    
  );
}

export default App;
