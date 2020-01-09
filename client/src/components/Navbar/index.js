import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = props => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand col" to="/Search">
                <h5>Google Reading List</h5>
            </Link>

            <div>
                <ul className="navbar-nav col">
                    <li className="nav-item">
                        <Link
                            to="/Search"
                            className={window.location.pathname === "/Search" || window.location.pathname === "/Search"
                                ? "nav-link active"
                                : "nav-link"
                            }
                        >
                            <p className="m-0">Search</p>
                        </Link>
                    </li>
                </ul>
            </div>
            <div style={{paddingLeft: 15}}>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link
                            to="/Saved"
                            className={window.location.pathname === "/Saved" || window.location.pathname === "/Saved"
                                ? "nav-link active"
                                : "nav-link"
                            }
                        >
                            <p className="m-0">Saved</p>
                        </Link>

                    </li>
                </ul>              
            </div>
        </nav>
    )
}

export default Navbar;