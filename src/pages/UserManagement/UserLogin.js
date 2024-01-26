import axios from 'axios';
import React, { useState } from 'react'
import MessageDialog from '../../components/AlertBox/AlertBox';

function UserLogin() {

    let initUserDetails = {
        userName: "",
        password: ""
    };

    const [user, setUser] = useState(initUserDetails);

    //alert box function
    const [messageData, setMessageData] = useState();

    const showMessageDialog = (name, message, callback) => {
        setMessageData({ show: true, name, message, setMessageData: setMessageData, callback: callback ? callback : null });
    }
    //end alert box function

    const handleChange = (e) => {
        setUser({ ...user, [e.target.id]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/user-management/login', user).then((res) => {
            if (res.data.success) {
                console.log(res.data);
                showMessageDialog("Success", "Successfully Log In", "/dashboard");
                localStorage.setItem('token', res.data.accessToken);
                localStorage.setItem('refreshtoken', res.data.refreshToken);
                localStorage.setItem('id', res.data.id);
                localStorage.setItem('name', res.data.firstName);
                setUser(initUserDetails);
            } else {
                showMessageDialog("Error", "Login Failed", "reload");
            }
        })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <div>
            <div class="container">
                <div class="row">
                    <div class="col-md-6 offset-md-3">
                        <h2 class="text-center text-dark mt-5">Login</h2>
                        <div class="card my-5">

                            <form class="card-body cardbody-color p-lg-5" onSubmit={handleSubmit}>
                                <div class="text-center">
                                    <img src="https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295397__340.png" class="img-fluid profile-image-pic img-thumbnail rounded-circle my-3" width="200px" alt="profile" />
                                </div>
                                <div class="mb-3">
                                    <input type="text" class="form-control" id="userName" aria-describedby="emailHelp" placeholder="User Name" onChange={handleChange} />
                                </div>
                                <div class="mb-3">
                                    <input type="password" class="form-control" id="password" placeholder="Password" onChange={handleChange} />
                                </div>
                                <div class="text-center"><button type="submit" class="btn btn-success px-5 mb-5 w-100">Login</button></div>
                                <div id="emailHelp" class="form-text text-center mb-5 text-dark">
                                    Not Registered?
                                    <a href="/user-management/register" class="text-dark fw-bold"> Create an Account</a>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
            <MessageDialog {...messageData} />
        </div>
    )
}

export default UserLogin