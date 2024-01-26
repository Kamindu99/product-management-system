import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

function ProductList() {


    const [product, setProducts] = useState([])

    // function getProducts() {
    //     axios.get(`http://localhost:8000/product/display`).then((res) => {

    //         setProducts(res.data);

    //     }).catch((err) => {
    //         alert(err);
    //         console.log(err);

    //     })

    // }





    function getProducts() {
        let token = localStorage.getItem('token');
        if (token == null) {
            alert("You are not an Authorized User. Please sign in first.")
            window.location.replace("/user-management/login")
        } else {
            axios.get('http://localhost:8000/product/display', {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json'
                }
            }).then((res) => {
                setProducts(res.data);
            }).catch((err) => {
                alert(err);
                console.log(err);
            });
        }
    }


    useEffect(() => {
        getProducts()
    }, []);


    const handleDelete = (id) => {
        axios.delete(`http://localhost:8000/product/delete/${id}`).then(res => {
            alert("product deleted");
            console.log("product deleted successfully")
            window.location.reload();
        }).catch((err) => {
            console.log(err);
            alert(err);
        })
    }

    return (
        <div>
            <h5 style={{ textAlign: 'center', textDecoration: 'underline' }}>Product list</h5>

            <Link to="/add" className="btn btn-primary"  >Add new products</Link>


            <br></br>
            <br></br>
            <div className="row">
                {product.map((product, index) => (
                    <div key={product._id} className="col-sm-2 mb-3">
                        <div className="card">
                            <img src={product.imageUrl} alt={product.productName} className="card-img-top" />

                            <div className="card-body">
                                <h5 className="card-title">{product.productName}</h5>
                                <p className="card-text">
                                    <strong>Product Code:</strong> {`${index + 1} -${product.productCode}`}<br />
                                    <strong>Price:</strong> {product.price} <br />

                                    <strong>Qty:</strong> {product.qty}
                                </p>
                                <Link to={`/update/${product._id}`} className="btn btn-success me-2">
                                    Update
                                </Link>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => handleDelete(product._id)}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>




        </div >
    )
}

export default ProductList