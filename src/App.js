import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import Home from "./components/Home/Home";

function App() {
  return (
    <div>
      <Home/>
    </div>
  );
}

export default App;
