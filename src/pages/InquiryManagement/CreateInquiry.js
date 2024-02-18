import React, { useState } from 'react'
import axios from 'axios';
import "./Inquiry.css"
import MessageDialog from '../../components/AlertBox/AlertBox';
import useAuthAPI from '../../components/Auth/AuthAPI';

function CreateInquiry() {

    let initInquiryDetails = {
        userId: localStorage.getItem('id'),
        subject: "",
        message: ""
    };

    const [inquiry, setInquiry] = useState(initInquiryDetails);

    //alert box function
    const [messageData, setMessageData] = useState();

    const showMessageDialog = (name, message, callback) => {
        setMessageData({ show: true, name, message, setMessageData: setMessageData, callback: callback ? callback : null });
    }
    //end alert box function

    const handleChange = (e) => {
        setInquiry({ ...inquiry, [e.target.id]: e.target.value });
    }
    const postapiRequest = useAuthAPI('inquiry', inquiry, 'post');

    const handleSubmit = (e) => {
        e.preventDefault();
        postapiRequest()
            .then((res) => {
                if (res.data.success) {
                    showMessageDialog("Success", "Inquiry Successfully Created", "reload");
                    setInquiry(initInquiryDetails);
                    console.log(res.data);
                } else {
                    showMessageDialog("Error", "Inquiry Create Failed", "reload");
                }
            })
            .catch((err) => {
                showMessageDialog("Error", err.response?.data.message, "");
            });
    }

    return (
        <div className='inquiry'>
            <div id="main-wrapper" class="container ">
                <div class="row justify-content-center " >
                    <div class="col-xl-10">
                        <br />
                        <div class="card border-0" >
                            <div class="card-body p-0" >
                                <div class="row no-gutters ">

                                    <div class="col-lg-6 d-none d-lg-inline-block">
                                        <div class="account-block rounded-right">
                                            <div class="overlay rounded-right"></div>
                                            <div class="account-testimonial">
                                                <h4 class="text-white mb-4"> If you have any inquiry, please contact us.</h4>
                                                <p class="lead text-white"> <i class="fas fa-quote-left"></i> We are here to help you. <i class="fas fa-quote-right"></i> </p>
                                                <p>- Admin User</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-lg-6 " >
                                        <div class="p-5">
                                            <div class="mb-3">
                                                <h3 class="h4 font-weight-bold text-theme">Inquiry Create</h3>
                                            </div>

                                            <p class="text-muted mt-2 mb-5">
                                                Please fill the following form to create an inquiry.
                                            </p>

                                            <form onSubmit={handleSubmit}>
                                                <div class="form-group">
                                                    <label>Subject</label>
                                                    <input required id='subject' type="text" class="form-control" onChange={handleChange} />
                                                </div>
                                                <br />
                                                <div class="form-group mb-5">
                                                    <label >Message</label>
                                                    <textarea required id="message" class="form-control" rows="5" onChange={handleChange}></textarea>
                                                </div>
                                                <button type="submit" class="btn btn-theme" style={{ width: '100%' }}>Submit</button>

                                            </form>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <br />
                    </div>
                </div>
            </div>
            <MessageDialog {...messageData} />
        </div>
    )
}

export default CreateInquiry