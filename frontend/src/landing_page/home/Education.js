import React from 'react'
function Education() {
    return ( 
        <div className='container px-5'>
            <div className='row p-5'>
                <div className='col-6 '>
                <img style={{width:"80%"}}
                    src='images\education.svg'/>
                </div>
                <div className='col-6 '>
                    <h2>Free and open market education</h2>
                    <br/>
                    <p style={{fontSize:"18px"}}>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a className='text-decoration-none'href="">Varsity                     <i class="fa fa-long-arrow-right " aria-hidden="true"></i></a>
                    <p  style={{fontSize:"18px"}}>
                    <br/>
                    TradingQ&A, the most active trading and investment community in India for all your market related queries.
                    </p>
                    <a className='text-decoration-none' href="">TradingQ&A                     <i class="fa fa-long-arrow-right " aria-hidden="true"></i>
                    </a>

                </div>
            </div>
        </div>   
    );
}

export default Education;