import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

function ProductList() {


    const [product, setProducts] = useState([])

    function getProducts() {
        axios.get(`http://localhost:8000/product/display`).then((res) => {
            setProducts(res.data);

        }).catch((err) => {
            alert(err);
            console.log(err);

        })

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
            <h1>Product list</h1>

            <Link to="/add" className="btn btn-success" >Add new products</Link>
            <table style={{ border: `5px solid black` }}>

                <thead>
                    <tr>
                        <th>Product Code</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>qty</th>

                    </tr>
                </thead>
                <tbody>


                    {product.map((product, index) => (
                        <tr key={product._id}>
                            <td>{index + 1}</td>
                            <td>{product.productName}</td>
                            <td>{product.price}</td>
                            <td>{product.qty}</td>
                            <td>
                                <Link to={`/update/$product._id}`} className="btn btn-success">Update</Link>


                                <button className="btn btn-danger" onClick={() =>
                                    handleDelete(product._id)}>Delete</button></td>

                        </tr>
                    ))}
                </tbody>
            </table>




        </div >
    )
}

export default ProductList