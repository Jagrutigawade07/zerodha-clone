import React from 'react'
function Hero() {
    return ( 
        <div className='container mt-5'>
            <div className='row p-5 mt-5 text-center'>
                <h1>Pricing</h1>
                <h4 className='text-muted fs-5'>Free equity investments and flat ₹20 traday and F&O trades</h4>
            </div>
            <div className='row p-5 text-center'>
            <div className='col-4 p-5'><img style={{width:"80%"}}src="images\pricingEquity.svg"></img>
            <h3>Free equity delivery</h3>
            <p className='text-muted mt-4'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p></div>
            <div className='col-4 p-5'><img style={{width:"80%"}}src="images\intradayTrades.svg"></img>
            <h3>Intraday and F&O trades</h3>
            <p className='text-muted mt-4'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p></div>
            <div className='col-4 p-5'><img style={{width:"80%"}}src="images\pricing0.svg"></img>
            <h3>Free direct MF</h3>
            <p className='text-muted mt-4'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p></div>
            </div>
        </div>
    );
}

export default Hero;