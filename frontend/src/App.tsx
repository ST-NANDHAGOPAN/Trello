import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/common.css";
import Router from './Router/Router';
import { useRoutes } from 'react-router-dom';
import SideBar from './components/sidebar/SideBar';
import NavBar from './components/navbar/NavBar';
function App() {
  const routing = useRoutes(Router);
  return (
    <div className="container-fluid">
      <div className='row '>
        <div className='col-2  p-0 m-0 '>
          <SideBar />
        </div>
        <div className='col-10  p-0 m-0 '>
          <NavBar />
          {routing}
        </div>
      </div>
    </div>
    
  );
}

export default App;
