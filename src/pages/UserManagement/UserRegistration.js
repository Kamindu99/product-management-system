import axios from 'axios';
import React, { useState } from 'react'

function UserRegistration() {

    let initUserDetails = {
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        age: "",
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
        axios.post('http://localhost:8000/api/user-management', user).then((res) => {
            showMessageDialog("Success", "User Created Successfully", "/user-management/login");
            setUser(initUserDetails);
        })
            .catch((err) => {
                showMessageDialog("Success", err, "reload");
            });
    }

    return (
        <div>
            <div class="container">
                <div class="row">
                    <div class="col-md-6 offset-md-3">
                        <h2 class="text-center text-dark mt-5">Registration</h2>
                        <div class="card my-5">

                            <form class="card-body cardbody-color p-lg-5" onSubmit={handleSubmit}>
                                <div class="text-center">
                                    <img src="https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295397__340.png" class="img-fluid profile-image-pic img-thumbnail rounded-circle my-3" width="200px" alt="profile" />
                                </div>
                                <div class="mb-3">
                                    <input type="text" class="form-control" id="firstName" placeholder="First Name" onChange={handleChange} />
                                </div>
                                <div class="mb-3">
                                    <input type="text" class="form-control" id="lastName" placeholder="Last Name" onChange={handleChange} />
                                </div>
                                <div class="mb-3">
                                    <input type="text" class="form-control" id="phone" placeholder="Phone" onChange={handleChange} />
                                </div>
                                <div class="mb-3">
                                    <input type="text" class="form-control" id="email" placeholder="Email" onChange={handleChange} />
                                </div>
                                <div class="mb-3">
                                    <input type="text" class="form-control" id="age" placeholder="Age" onChange={handleChange} />
                                </div>
                                <div class="mb-3">
                                    <input type="text" class="form-control" id="userName" placeholder="User Name" onChange={handleChange} />
                                </div>
                                <div class="mb-3">
                                    <input type="password" class="form-control" id="password" placeholder="Password" onChange={handleChange} />
                                </div>
                                <div class="text-center"><button type="submit" class="btn btn-success px-5 mb-5 w-100">Submit</button></div>
                                <div id="emailHelp" class="form-text text-center mb-5 text-dark">
                                    Allready have an Account?
                                    <a href="/user-management/login" class="text-dark fw-bold"> Login</a>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserRegistration