import React from "react";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Menu from './Component/menu';
import Home from './Component/Home';




function App(){
  return(
    <Router>
      <Menu/>
      <Routes>
        <Route path={`/`} element={<Home/>}></Route>
      </Routes>
    </Router>
  )
}

export default App