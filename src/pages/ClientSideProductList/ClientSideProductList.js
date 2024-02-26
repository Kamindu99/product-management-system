import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

function ClientSideProductList() {

  const [product, setProducts] = useState([])
  const [isPending, setInPending] = useState(false)

  function getClientProducts() {
    // let token = localStorage.getItem('token');
    // if (token == null) {
    //   alert("You are not an Authorized User. Please sign in first.")
    //   window.location.replace("/user-management/login")
    // } else {
    setInPending(true)
    axios.get('http://localhost:8000/product/display').then((res) => {
      setProducts(res.data);
      setInPending(false)
    }).catch((err) => {
      alert(err);
      setInPending(false)
      console.log(err);
    });
  }


  useEffect(() => {
    getClientProducts()
  }, []);



  const filterData = (products, searchkey) => {
    const result = products.filter(
      (product) =>
        product.productName.toLowerCase().includes(searchkey) ||
        product.productName.toUpperCase().includes(searchkey)
    );
    setProducts(result);
  };

  const handleSearchArea = (e) => {
    const searchkey = e.currentTarget.value;
    axios.get("http://localhost:8000/product/display",
      {
        // headers: {
        //   'Authorization': `Bearer ${localStorage.getItem('token')}`,
        //   'Content-Type': 'application/json'
        // }
      }
    )
      .then((res) => {
        filterData(res.data, searchkey);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (

    <div className='container'>
      <h5 style={{ textAlign: 'center', textDecoration: 'underline' }}>Product list</h5>


      <div style={{
        display: "inline-block",
        float: 'right',
        marginRight: '3%'
      }}>
        <input type="text" onChange={handleSearchArea} placeholder='Search by name' />
        <button>search</button>
      </div>
      <br></br>
      <br></br>
      <div className="row ">
        {/*javascript if else*/}
        {isPending == true ? <>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "40vh" }}>
            <div className="spinner-border text-success" style={{ width: "100px", height: "100px", animationDuration: "1.5s" }} role="status"></div>
          </div>
        </>
          //if false (:)
          :
          <>
            {product.map((product, index) => (
              <div key={product._id} className="col-sm-3 mb-3">
                <div className="card">
                  <img src={product.imageUrl} alt={product.productName} className="card-img-top" />

                  <div className="card-body">
                    <h5 className="card-title">{product.productName}</h5>
                    <p className="card-text">
                      <strong>Product Code:</strong> {`${index + 1} -${product.productCode}`}<br />
                      <strong>Price:</strong> {product.price} <br />

                      <strong>Qty:</strong> {product.qty}
                    </p>
                    <Link to={`/clientProductList/${product._id}`} className="btn btn-success me-2">
                      Add to the cart
                    </Link>

                  </div>
                </div>
              </div>
            ))}
          </>

        }
      </div>




    </div >
  )
}


export default ClientSideProductList
