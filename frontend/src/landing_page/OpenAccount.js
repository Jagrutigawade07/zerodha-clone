import React from 'react'
function OpenAccount() {
    return ( 
        <div className='container p-5 mb-5'> 
            <div className='row text-center'>
                <img src='images/homeHero.png' className='mb-5'/>
                <h1 className='mt-5 text-center'>
                Open a Zerodha account
                </h1>
                <p className='text-center'>                <br/>
                Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                <button className='p-2 btn btn-primary fs-5 mt-4' style={{width:"15%", margin:"0 auto"}}>Sign up for Free</button>
            </div>
        </div>
    );
}

export default OpenAccount;
