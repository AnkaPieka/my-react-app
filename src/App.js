import logo from './logo.svg';
import { Switch, Route, NavLink } from 'react-router-dom'
import './App.css';
import Homepage from './pages/Homepage'
import Temperature from './pages/Temperature'
import CustomizeImg from './pages/CustomizeImg'

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to="/">Home</NavLink><br/>
        <NavLink to="/temperature">Temperature</NavLink><br/>
        <NavLink to="/customize-image">Custom image</NavLink><br/>
      </nav>
      <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route exact path="/temperature" component={Temperature}/>
        <Route exact path="/customize-image" component={CustomizeImg}/>
      </Switch>
    </div>
  );
}

export default App;
