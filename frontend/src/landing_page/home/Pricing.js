import React from 'react'
function Pricing() {
    return ( 
        <div className='container'>
            <div className='row p-5'>
                    <div className='col-5 p-5'>
                        <h1>Unbeatable pricing</h1>
                        <p className='mt-4 mb-4'>We pioneered the concept of discount broking and price transparency in India. Flat   fees and no hidden charges.</p>
                        <a href='' className='text-decoration-none'>See pricing <i class="fa fa-long-arrow-right " aria-hidden="true"></i></a>
                    </div>
                <div className='col-7 mt-4 p-5'>
                    <div className='row text-center'>
                        <div className='col p-4 border'>
                            <h1>₹0</h1>
                            <br/>
                            <p>Free account
                            opening</p>
                        </div>
                        <div className='col p-4 border'>
                        <h1>₹0</h1>
                        <br/>
                        <p>Free equity delivery
                        and direct mutual funds</p>
                        </div>
                        <div className='col p-4 border'>
                        <h1>₹20</h1>
                        <br/>
                        <p>Intraday and
                        F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;