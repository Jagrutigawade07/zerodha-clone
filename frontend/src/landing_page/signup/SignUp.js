import React from 'react'
function SignUp() {
    return ( 
        
        <div className='container p-5'>
            <div className='row m-5 '>
                <div className='col-7 '>
                    <img src='images\signup.png'/>
                </div>
               
                <div className='col-5 p-5'>
                    <h1>Signup now</h1>
                    <h3 className='fs-5 py-3 text-muted'>Or track your existing application.</h3>
                    <div class="input-group flex-nowrap "style={{width:'70%'}}>
  <span class="input-group-text" id="addon-wrapping">+91</span>
  <input type="text" class="form-control" placeholder="Mobile Number" aria-label="Username" aria-describedby="addon-wrapping" />
</div>
<p className='mt-3 text-muted'>You will receive an OTP on your number</p>
<button className='p-2 btn btn-primary fs-5' style={{width:"25%"}}>Continue</button><br/><br/>
<a href=''  style={{textDecoration:"none", fontSize:"14px"}}>Want to open an NRI account?</a>
                </div> 
            </div>
            <div className='text-muted text-center mx-5 px-5 ' style={{fontSize:"13px"}}>
            I authorise Zerodha to contact me even if my number is registered on DND. I authorise Zerodha to fetch my KYC information from the C-KYC registry with my PAN.<br/> Please visit<a href=''  style={{textDecoration:"none"}}> this article </a> to know more.<br/><br/>

By submitting your contact details, you authorize Zerodha to contact you even if you are registered on DND & conduct online KYC for trading & demat account opening as per KRA regulations and PMLA guidelines.<br/><br/>

If you are looking to open a HUF, Corporate, Partnership, or NRI account, you have to use the <a href=''  style={{textDecoration:"none"}}>offline forms</a>. For help,<a href=''  style={{textDecoration:"none"}}> click here</a>.
            </div>
        </div>
    );
}

export default SignUp;