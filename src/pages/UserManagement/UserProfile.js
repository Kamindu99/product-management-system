import axios from "axios";
import React, { useEffect, useState } from "react";

function UserProfile() {
    const [user, setUser] = useState({});

    console.log(user);
    let token = localStorage.getItem('refreshtoken')

    const getUser = async () => {
        try {
            const response = await axios.post(`http://localhost:8000/api/user-management/get`, { token });
            setUser(response.data.user);
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };

    useEffect(() => {
        if (token) {
            getUser();
        }
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8000/api/user-management/${id}`);

            alert("User Deleted Successfully");
            localStorage.removeItem("token");
            localStorage.removeItem("name");
            window.location.href = "/";
        } catch (error) {
            console.error("Error deleting user data:", error);
        }
    };

    return (
        <div>
            <div>
                <header className="bg-primary text-white text-center  py-2 mb-3">
                    <h1>User Profile</h1>
                    <p>{user?.firstName}'s Profile</p>
                </header>

            </div>

            <div
                key={user._id}
                className="col-md-3 mb-3 container mt-5 d-flex justify-content-center align-items-center"
            >
                <div className="card">
                    <img
                        src={
                            "https://static.vecteezy.com/system/resources/previews/002/275/847/original/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg"
                        }
                        className="card-img-top"
                        alt={"ss"}
                    />
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-8">
                                <h2 className="card-title">{user.firstName}</h2>
                            </div>
                            <div className="col-md-4">
                                {/* <span className="badge bg-primary">{train.type}</span> */}
                            </div>
                        </div>
                        <p className="card-text">
                            <strong>Phone:</strong> {user.phone}
                        </p>
                        <p className="card-text">
                            <strong>Email:</strong> {user.email}
                        </p>

                        <div className="row">
                            <div className="col-md-6">
                                <a className="btn btn-warning" href="/editprofile">
                                    Edit Account
                                </a>
                            </div>
                            <div className="col-md-6">
                                <button
                                    className="btn btn-danger"
                                    onClick={() => handleDelete(user._id)}
                                >
                                    Delete Account
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserProfile;
