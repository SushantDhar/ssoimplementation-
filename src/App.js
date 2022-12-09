import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import Dashboard from './Components/Dashboard';
import Login from './Components/Login/Login';
import Preferences from './Components/Preferences';
import useToken from './Components/useToken';

function App() {
  const { token,setToken } = useToken();
  console.log(token)

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="wrapper">
      <h1>Application</h1>

      <BrowserRouter>
        <Routes>
          <Route path='/dashboard' element = {<Dashboard/>}/>
          <Route path='/preferences' element = {<Preferences/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;