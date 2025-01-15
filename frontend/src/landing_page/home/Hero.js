import React from 'react'
function Hero() {
    return ( 
        <div className='container text-center p-5'> 
            <div className='row p-5 '>
                <img style={{width:"76%"}} src='images/homeHero.png' className='p-5 container-fluid'/>
                <h1 className=' '>
                    Invest in everything
                </h1>
                <p >Online platform to invest in stocks, derivatives, nutual funds, and more</p>
                <button className='p-2 btn btn-primary fs-5 mb-5 mt-4' style={{width:"25%", margin:"0 auto"}}>Sign Up for Free</button>
            </div>
        </div>
    );
}

export default Hero;
