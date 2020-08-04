import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { Route, Switch, HashRouter } from "react-router-dom";
import Homepage from "./views/homepage/Homepage";

function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" component={Homepage} exact />
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
