import React, {useEffect, useState} from "react";
import "./App.css"
import { useSelector } from "react-redux";
import {Redirect, Route, Switch, useHistory} from "react-router-dom";

import Navbar from "./components/Navbar/Navbar"
import MainBody from "./components/MainBody/MainBody"

import Login from "./components/Login/Login"

function App() {

  const {accessToken, loading} = useSelector(state => state.auth);
  const history = useHistory();

    useEffect(() => {
      
      if(!loading && accessToken === null) {
        history.push("/auth");
      }
  }, [accessToken, loading, history])

  return (
    <>
      <Switch>
        <Route exact path="/">
          <div className="container">
             <Navbar />
             <MainBody />
          </div>
        </Route>
        <Route exact path="/auth">
          <Login />
        </Route>
       
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </>
  );
}

export default App;
