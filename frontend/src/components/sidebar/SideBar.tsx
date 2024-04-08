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
                                <Link  to="/admin/dashboard">
                                    <span className="text">Dashboard</span>
                                </Link>
                            </li>
                            <li className="nav-link">
                                <Link to="/admin/add-products">
                                    <span className="text ">Products</span>
                                </Link>
                            </li>
                            <li className="nav-link">
                                <Link  to="/admin/add-news">
                                    <span className="text ">News</span>
                                </Link>
                            </li>
                            <li className="nav-link">
                                <Link  to="/admin/add-users">
                                    <span className="text ">User</span>
                                </Link>
                            </li>
                            <li className="nav-link">
                                <Link to="/admin/orders">
                                    <span className="text ">Orders</span>
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
