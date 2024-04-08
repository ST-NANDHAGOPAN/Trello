import React from 'react';
import { Link } from 'react-router-dom';
import "../../assets/sidebar.css"
function SideBar() {
    return (
        <div>
            <nav className="sidebar bg-black">
                <header >
                    <div className="text header-text ">
                        <span className="main">Trello</span>
                    </div>
                </header>
                <div className='menu-bar'>
                    <div className="menu">
                        <ul className="menu-links">
                            <li className="nav-link">
                                <Link to="/">
                                    <span className="text">Project1</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

            </nav>
        </div>
    );
}

export default SideBar;
