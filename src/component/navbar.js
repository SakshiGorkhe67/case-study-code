import React from 'react';
import logo from './logo.png'; // Import the logo image
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/home">
                        <img src={logo} width="auto" height="40" className="d-inline-block align-top" alt="Logo" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto"></ul>
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <Link className="nav-link text-white" to="/home">admin-home</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link text-white" to="/logout">logout</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

           
           
        </>
    )
}

export default Navbar;
