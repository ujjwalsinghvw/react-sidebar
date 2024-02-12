import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import '@fortawesome/fontawesome-free/css/all.css'

const Sidebar = () => {
    const [active, setActive] = useState("home");
  
    return (
      
        <div className="sidebar">
          <div className="sidebar-header">
            <h2>Sidebar</h2>
          </div>
          <ul className="sidebar-menu">
          <Link to="/" onClick={()=>setActive("home")} >
            <li className={`sidebar-menu-item ${active=="home"? "active": ""}`}>
            <i className='fa fa-home'> Home</i>
            </li>
            </Link>
            
              <Link to="/about" onClick={()=>setActive("about")}>
              <li className={`sidebar-menu-item ${active=="about"? "active": ""}`}>
              <i className='fa fa-info-circle'> About</i>
                </li>
                </Link>

                <Link to="/services" onClick={()=>setActive("services")}>
            <li className={`sidebar-menu-item ${active=="services"? "active": ""}`}>
            <i className='fa fa-wrench'> Services</i>
            </li>
            </Link>
            <Link to="/contact" onClick={()=>setActive("contact")}>
                
            <li className={`sidebar-menu-item ${active=="contact"? "active": ""}`}>
            <i className='fa fa-phone-square' > Contact</i>
            </li>
            </Link>
          </ul>
        </div>
      
    );
}

export default Sidebar