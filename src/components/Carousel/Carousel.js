import React from 'react'
import './Carousel.css'
function Carousel() {
    return (
        <div className="carousel">
            <div className=".carousel-container">

                <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="https://media.istockphoto.com/id/1367839756/vector/cat-and-dog-food-cartoon-pet-feed-containers-or-packs-home-animals-wet-and-dry-meal-round.jpg?s=1024x1024&w=is&k=20&c=2Mx-hSbk_cbxdqQakrYZHIvYOHny25YlwKPoHNK3ohc=" class="d-block w-100" alt="img1" style={{ height: "300px", objectFit: 'cover' }} />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Pets</h5>
                            </div>


                        </div>
                        <div className="carousel-item">
                            <img src="https://th.bing.com/th/id/OIP._IgQ43umVmyr_NWLXTfTqwHaCj?rs=1&pid=ImgDetMain" class="d-block w-100" style={{ height: "300px", objectFit: 'cover' }} alt="img2" />
                        </div>
                        <div className="carousel-item">
                            <img src="https://media.istockphoto.com/id/1276788283/photo/young-woman-with-laughing-corgi-puppy-nature-background.jpg?s=1024x1024&w=is&k=20&c=B3-Qcwj646DGzIO8j8W-9M7sq7Lo48C1U1ZBpKL8pNo=" class="d-block w-100" style={{ height: "300px", objectFit: 'cover' }} alt="img3" />
                        </div>
                    </div></div></div>
        </div>
    )
}

export default Carousel