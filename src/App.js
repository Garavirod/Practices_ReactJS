import React from 'react';
import Counter from './components/Counter';
import List from './components/List';
import Form from './components/Form';
import FormHook from './components/FormHook';
import RouterCompo from './components/RouterCompo';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";

function App() {
  return (
   <div>
      <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-danger">
        <Link className="navbar-brand" to="/">Navbar</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink  activeClassName="active" className="nav-item nav-link" to="/forms">Froms <span className="sr-only">(current)</span></NavLink>
            <NavLink  activeClassName="active" className="nav-item nav-link" to="/contact">Contact</NavLink>
            <NavLink  activeClassName="active" className="nav-item nav-link" to="/list">List</NavLink>
            <NavLink  activeClassName="active" className="nav-item nav-link" to="/counter">Counter</NavLink>          
          </div>
        </div>
      </nav>
       <h1>Hello world from ReactJS!</h1>
       <hr/>
       {/* Inside 'switch' we're going to load dynamic content */}
       <Switch>
         <Route path='/' exact> 
          <h1>Root content</h1>
         </Route>                                    
         <Route path='/contact' component={RouterCompo}/>
         <Route path='/forms' component={FormHook}/>
         <Route path='/counter' component={Counter}/>
         <Route path='/list' component={List}/>
       </Switch>
      </Router>

      
       
   </div>
  );
}

export default App;
