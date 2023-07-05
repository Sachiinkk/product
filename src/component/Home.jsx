import React from 'react'
import Product from './Products';

 

const Home = () => {
    return (
        <div className='hero'>
            <div className="card text-bg-white border-0">
                <img src="/assets/bg.png" className="card-img" alt="Background image " height= "450px" />
                <div className="card-img-overlay d-flex flex-colum justify-content-center">
                    <div className="container">
                    <h5 className="card-title display-3 fw-bolder mb-0">New Season Arrivals</h5>
                    {/* <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                    <p className="card-text lead fs-2">Check Out Latest One</p>
                    </div>
                    
                   
                </div>
            </div>
            <Product/>
             
        </div>
    )
}

export default Home;
