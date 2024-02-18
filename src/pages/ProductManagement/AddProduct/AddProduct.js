import React, { useState } from 'react'
import axios from 'axios'
import './AddProduct.css';
function AddProduct() {
    const [productCode, setProductCode] = useState("");

    const [productName, setProductName] = useState("");
    const [price, setPrice] = useState("");
    const [qty, setQty] = useState("");
    const [imageUrl, setImageUrl] = useState("")

    async function sendData(e) {
        e.preventDefault();

        const concatenateCode = productCode ? `PR${productCode}` : '';

        const newProduct = {
            productCode: concatenateCode,
            productName,
            price,
            qty,
            imageUrl

        }

        console.log(newProduct);
        axios.post(`http://localhost:8000/product/add`, newProduct).then(() => {
            console.log("product added");
            alert("product added");


            // window.location.replace("/product-management/product/list");
               window.location.replace("/product-management/product/list");

        }).catch((err) => {
            alert(err);

        })

    }

    return (
        <div className='addProduct'>
            <div className='container ' >
                <br />
                <form onSubmit={sendData} >
                    <h1 className="header"><u>Add products</u></h1>

                    <h1 className="headerTitle"><u>Enter details</u></h1>

                    <div className="mb-3">
                        <label for="productCode" className="form-label">productCode</label>
                        <input type="text" className="form-control" id="productCode" onChange={(e) => {
                            setProductCode(e.target.value)
                        }} />
                    </div>

                    <div className="mb-3">
                        <label for="productName" className="form-label">productName</label>
                        <input type="text" className="form-control" id="productName" onChange={(e) => {
                            setProductName(e.target.value)
                        }} required />
                    </div>

                    <div className="mb-3">
                        <label for="price" className="form-label">price</label>
                        <input type="text" className="form-control" id="price" onChange={(e) => {
                            setPrice(e.target.value)
                        }} />
                    </div>

                    <div className="mb-3">
                        <label for="qty" className="form-label">qty</label>
                        <input type="text" className="form-control" id="qty" onChange={(e) => {
                            setQty(e.target.value)
                        }} />
                    </div>
                    <div className="mb-3">
                        <label for="imageUrl" className="form-label">imageUrl</label>
                        <input type="text" className="form-control" id="imageUrl" onChange={(e) => {
                            setImageUrl(e.target.value)
                        }} />
                    </div>



                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                <br />
            </div>
        </div>

    )
}

export default AddProduct