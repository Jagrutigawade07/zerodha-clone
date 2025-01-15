import React from 'react'
function Awards() {
    return (  
        <div className='mt-5 mb-5 container'>
            <div className='row '>
                <div className='col-6 '>
                    <img src='images/largestBroker.svg'></img>
                </div>
                <div className='col-5'>
                    <h1>Largest stock broker in India</h1>
                    <p>2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
                    <div className='row mt-5 p-2'>
                        <div className='col-6'>
                            <ul>
                                <li>
                                    <p>
                                        Futures and Options
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Commodities and Derivatives
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Currency derivatives
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div className='col-6'>
                        <ul>
                                <li>
                                    <p>
                                        Stocks & IPOs
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Direct mutual funds
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Bonda and Government securities
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <img style={{width:"90%"}}
                    src='images\pressLogos.png'/>
                </div>
            </div>
        </div>
    );
}

export default Awards;