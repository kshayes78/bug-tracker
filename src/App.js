import { BrowserRouter, Route, Switch } from 'react-router-dom';
//styles
import './App.css';
//pages and components
import Dashboard from './pages/dashboard/Dashboard';
import Create from './pages/create/Create';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Project from './pages/project/Project';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <div className='container'>
          <Switch>
            <Route exact path='/'>
              <Dashboard />
            </Route>
            <Route path='/'>
              <Create />
            </Route>
            <Route path='/'>
              <Login />
            </Route>
            <Route path='/'>
              <Signup />
            </Route>
            <Route path='/'>
              <Project />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
