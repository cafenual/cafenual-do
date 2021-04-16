import Header from 'layouts/Header';
import Login from 'pages/Login';
import Main from 'pages/Main';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import "./App.css"


function App() {
  return (
    <div id="container">
    <Header />
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
