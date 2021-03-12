import Dashboard from "./components/Dashboard";
import DashBoard2 from "./components/Dashboard2"
import Signin from "./components/signin";
import Signup from "./components/signup";
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './styles/app.scss';

function App() {
  return (
    <div className="App">
      {/* <Dashboard></Dashboard> */}
      {/* <Signin></Signin> */}
      {/* <Signup></Signup> */}
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Signin} exact />
          <Route path="/dashboard" component={Dashboard}/>
          <Route path="/Signup" component={Signup}/>
          <Route path="/dashboard2" component={DashBoard2}/>


        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
