import React, { useState, useEffect } from 'react';
import './Navbar.css';
import axios from 'axios';
import MessageDialog from '../AlertBox/AlertBox';

const Navbar = () => {
    const [isSticky, setSticky] = useState(false)
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    //alert box function
    const [messageData, setMessageData] = useState();

    const showMessageDialog = (name, message, callback) => {
        setMessageData({ show: true, name, message, setMessageData: setMessageData, callback: callback ? callback : null });
    }
    //end alert box function


    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 99) {
                setSticky(true)
            } else {
                setSticky(false)
            }
        })
    }, [])

    const handleSubmit = () => {
        let refreshtoken = {
            refreshToken: localStorage.getItem('refreshtoken')
        }
        axios.post('http://localhost:8000/api/user-management/logout', refreshtoken).then((res) => {
            if (res.data.success) {
                showMessageDialog("Success", "Successfully Log Out", "/user-management/login");
                localStorage.clear();
            } else {
                showMessageDialog("Error", "Login Failed", '');
            }
        })
            .catch((err) => {
                console.log(err);
            });
    }

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
                            <a href='/product-management/product/list' className={`nav-link me-3 nav-link-a-text `}>Products</a>
                        </li>

                        <li className="nav-item">
                            <a href='/product/clientList' className={`nav-link me-3 nav-link-a-text `}>Product list Client</a>
                        </li>

                        <li className="nav-item">
                            <a href='/product/addPayment' className={`nav-link me-3 nav-link-a-text `}>Payment</a>
                        </li>

                        {localStorage.getItem('token') ?
                            <li className="nav-item dropdown" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                                <a
                                    className={`nav-link nav-link-a-text me-3 dropdown-toggle`}
                                    type="button"
                                    role="button"
                                    id="downLoadDropdown"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded={isDropdownOpen}
                                >
                                    {localStorage.getItem('name')}
                                </a>
                                <ul className={`dropdown-menu${isDropdownOpen ? ' show' : ''}`} aria-labelledby="downLoadDropdown">
                                    <li>
                                        <a
                                            className={`dropdown-item`}
                                            href="/user-management/user-profile"
                                        >
                                            User Profile
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className={`dropdown-item`}
                                            onClick={handleSubmit}
                                            style={{ cursor: 'pointer' }}
                                        >
                                            LogOut
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            :
                            <li className="nav-item">
                                <a href='/user-management/login' className={`nav-link me-3 nav-link-a-text `}>Login</a>
                            </li>
                        }

                    </ul>
                </div>
            </div>
            <MessageDialog {...messageData} />
        </nav>
    );
};

export default Navbar;