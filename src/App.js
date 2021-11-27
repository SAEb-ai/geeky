import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import SignUp from './pages/SignUp/signup';
import SignIn from "./pages/SignIn/signin";
import { createContext, useReducer } from "react";
import {initialState, reducer} from "./reducer/reducer.jsx";
import Home from "./pages/Home/home";
import About from "./pages/About/about";
export const UserContext = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <Router>
      <UserContext.Provider value={{state, dispatch}}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/sign-up" component={SignUp} />
          <Route exact path="/sign-in" component={SignIn} />
          <Route exact path="/about" component={About} />

        </Switch>
        </UserContext.Provider>
      </Router>
    </div>
  );
}

export default App;
