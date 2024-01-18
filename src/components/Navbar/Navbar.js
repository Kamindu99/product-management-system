import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isSticky, setSticky] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 99) {
                setSticky(true)
            } else {
                setSticky(false)
            }
        })
    }, [])

    return (
        <nav className={`navbar navbar-expand-lg navbar-light ${isSticky ? "stickynav" : "normalnav"}`} >
            <div className="container-fluid">
                <div className="navbar-heading mt-2">
                    <h3 style={{ marginLeft: '30px' }}>
                        <a className="navbar-h ms-5" to="/">
                            <img src="https://cdn-icons-png.flaticon.com/512/1170/1170577.png" style={{ height: '50px' }} alt="Logo" className="logo-image me-3" />
                            Product Management System
                        </a>
                    </h3>
                </div>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav  mb-2 mb-lg-0 ms-auto" style={{ marginRight: '5%' }}>
                        <li className="nav-item">
                            <a className={`nav-link nav-link-a-text me-3 active`} href="/">Home</a>
                        </li>

                        <li className="nav-item">
                            <a href='/product' className={`nav-link me-3 nav-link-a-text `}>Products</a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;