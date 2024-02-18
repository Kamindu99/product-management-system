import React from 'react'
import './Home.css';
import Carousel from '../../../components/Carousel/Carousel';
function Home() {
    return (
        <div className='home'>

            <div className="homeimage">
                <div className=".home .container">
                    <button class="btn">Admin</button>
                    <button class="btn">User</button>
                    <Carousel />
                </div>
            </div>
        </div>
    )
}

export default Home