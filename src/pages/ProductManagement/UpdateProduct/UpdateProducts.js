import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

function UpdateProducts() {


    const { id } = useParams();
    const [productCode, setProductCode] = useState("")
    const [productName, setProductName] = useState("");

    const [price, setPrice] = useState("");
    const [qty, setQty] = useState("")
    const update = (e) => {
        e.preventDefault();
        const updateProduct = {
            productCode,
            productName,
            price,
            qty
        };
        console.log(updateProduct);
        axios.put(`http://localhost:8000/product/update/${id}`, updateProduct)
            .then((res) => {
                console.log(`updated`, res);
                alert(`updated`);

                setProductName("");
                setPrice("");
                setQty("");

                window.location.replace(`/product`);
            }).catch((err) => {
                console.log(err);
                alert(err);
            });
    }
    const getProduct = () => {
        axios.get(`http://localhost:8000/product/get/${id}`).then((res) => {

            setProductCode(res.data.product.productCode)
            setProductName(res.data.product.productName);
            setPrice(res.data.product.price);
            setQty(res.data.product.qty);

        }).catch((err) => {
            alert(err);
        })

    }
    useEffect(() => {
        getProduct();

    }, [id])
    return (






        <form onSubmit={update}>


            <div class="mb-3">


                <label for="productCode" class="form-label">productCodee</label>
                <input type="text" class="form-control" id="productCode" onChange={(e) => {
                    setProductCode(e.target.value)
                }}
                    value={productCode}
                />
            </div>
            <div class="mb-3">


                <label for="productName" class="form-label">productName</label>
                <input type="text" class="form-control" id="productName" onChange={(e) => {
                    setProductName(e.target.value)
                }}
                    value={productName}
                />
            </div>


            <div class="mb-3">


                <label for="price" class="form-label">price</label>
                <input type="text" class="form-control" id="price" onChange={(e) => {
                    setPrice(e.target.value)
                }}
                    value={price}
                />
            </div>
            <div class="mb-3">


                <label for="qty" class="form-label">qty</label>
                <input type="text" class="form-control" id="qty" onChange={(e) => {
                    setQty(e.target.value)
                }}
                    value={qty}
                />
            </div>


            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    )
}

export default UpdateProducts