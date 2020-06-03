import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {AboutPage} from "./pages/AboutPage";
import {TodosPage} from "./pages/TodosPage";
import {NavBar} from "./components/NavBar";


const App: React.FC = () => {

  return(
      <BrowserRouter>
          <NavBar />
          <div className="container">
              <Switch>
                  <Route component={TodosPage} path="/" exact />
                  <Route component={AboutPage} path="/about" />
              </Switch>
          </div>
      </BrowserRouter>
  )
};

export default App;
