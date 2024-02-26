import React from 'react'

function Payment() {
    return (
        <div className="container">
            <h5 style={{ textAlign: "center" }}>Select the option</h5>
            <div class="card mb-2s" style={{ width: " 18rem" }}>
                <img class="card-img-top" src="https://th.bing.com/th/id/R.6772038f05db5f61ea2c7aab2f058dff?rik=WswZa6PXHcP04g&pid=ImgRaw&r=0" alt="Card image cap" />
                <div class="card-body">
                    <h5 class="card-title">Payment method option 1</h5>
                    {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Account number</li>
                    <li class="list-group-item">Expiary date:</li>

                </ul>
                <div class="card-body">
                    <a href="#" class="card-link">Select</a>
                </div>
            </div>
        </div>

    )
}

export default Payment