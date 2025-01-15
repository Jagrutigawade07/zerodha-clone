import React from 'react'
function NotFound() {
    return ( 
        <div className='container p-5 mb-5'> 
            <div className='row text-center'>
                <img src='images/homeHero.png' className='mb-5'/>
                <h1 className='mt-5 text-center'>
                404 Not Found
                </h1>
                <p>Sorry, the page you are looking for does not exist.</p>
            </div>
        </div>
    );
}

export default NotFound;
