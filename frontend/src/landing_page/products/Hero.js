import React from 'react'
function Hero() {
    return ( 
        <div className='container p-4 border-bottom'>
        <h1 className='mt-5 text-center'>Zerodha Products</h1>
        <p className='mt-4 text-center text-muted fs-5'>Sleek, modern, and intuitive trading platforms</p>
        <p className='text-center mt-4 mb-5'>Check out our <a href='' style={{textDecoration:"none"}}>investment offerings <i class="fa fa-long-arrow-right " aria-hidden="true"></i></a></p>
        </div>
    );
}

export default Hero;