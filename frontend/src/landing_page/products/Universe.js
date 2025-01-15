import React from 'react'

function Universe() {
    return ( 
        <div className='container'>
            <div className='row '>
            <h4 className='text-center'>Want to know more about our technology stack? Check out the Zerodha.tech blog.</h4>
            <h2 className='text-center mt-5'>The Zerodha Univere</h2>
        <p className='text-center mt-3'>Extend your trading and investment experience even further with our partner platforms <br/><br/><br/>

</p>
        
            </div>

            <div className='mini-container text-center p-5'>
            <div className='row px-5'>
            <div className='col-4'>
                <img style={{width:"60%"}} src="images\zerodhaFundHouse.png"></img>
                <h6 style={{fontSize:"12px"}} className="text-muted mt-4 px-5">Our asset management venture
that is creating simple and transparent index
funds to help you save for your goals.
</h6>
            </div>
            <div className='col-4'>
                <img style={{width:"60%"}}  src="images\sensibullLogo.svg"></img>
                <h6 style={{fontSize:"12px"}} className="text-muted mt-5 px-5">Our asset management venture
that is creating simple and transparent index
funds to help you save for your goals.
</h6>
            </div>
            <div className='col-4'>
                <img style={{width:"60%"}} src="images\goldenpiLogo.png"></img>
            <h6 style={{fontSize:"12px"}} className="text-muted mt-4 px-5">Our asset management venture
that is creating simple and transparent index
funds to help you save for your goals.
</h6>
            </div>
            </div>
            <div className='row mt-5 p-5'>
            <div className='col-4'>
                <img style={{width:"50%"}}  src="images\streakLogo.png"></img>
                <h6 style={{fontSize:"12px"}} className="text-muted mt-4 px-5">Our asset management venture
that is creating simple and transparent index
funds to help you save for your goals.
</h6>
            </div>
            <div className='col-4'>
                <img style={{width:"60%"}}src="images\smallcaseLogo.png"></img>
                <h6 style={{fontSize:"12px"}} className="text-muted mt-4 px-5">Our asset management venture
that is creating simple and transparent index
funds to help you save for your goals.
</h6>
            </div>
            <div className='col-4'>
                <img style={{width:"40%"}}  src="images\dittoLogo.png"></img>
                <h6 style={{fontSize:"12px"}} className="text-muted mt-4 px-5">Our asset management venture
that is creating simple and transparent index
funds to help you save for your goals.
</h6>
            </div>
           </div>
           <button className='p-2 btn btn-primary fs-5 mt-4 ' style={{width:"18%"}}>Sign Up for Free</button>
            </div>
        </div>
     );
}

export default Universe;