import icon from  '../../../asset/icon.png';
import { useState } from 'react';
import AboutAuth from './AboutAuth';
import './Auth.css';
const Auth =() =>{
  const [issignup ,setIssignup] =useState(false)
  const handleswitch =()=>{
    setIssignup(!issignup)
  }
  return (
    <section className='auth-section'>
 {issignup && <AboutAuth/>}
    <div className='auth-container-2'>
      { !issignup && <img src={icon} alt ='stack overflow' className='login-logo'/>}
<form>
  {
    issignup  &&(
      <label htmlFor='name'>
        <h4>Display Name</h4>
        <input type='text' id='name' name='name'/>
      </label>
    )
  }
  <label  htmlFor="email">
    <h4>Email</h4>
    <input type="email" name='email' id ='email'/>
 </label>
 <label  htmlFor="password">
  <div style={{ display:'flex', justifyContent:'space-between'}}>
    <h4>Password</h4>{!issignup && <p style={{color: "#007ac6", fontSize :"13px"}}>forgot password ?</p>}
    </div>
    <input type="password" name="password" id="passwpord"/>
    {issignup && <p style={{color: "#666767", fontSize :"13px"}}>Password must contain at least eight<br/> characters,including at least 1letter and 1<br/> number.</p>}
 </label>
 {
  issignup && (
    <label htmlFor='check'>
    <input type='checkbox' id='check'/>
    <p>Opt-in to receive occasional,<br/> product updates ,user research invitations,<br/> company announcements,and digests.</p>
    </label>
  )
 }
 <button type='submit' className='auth-btn'>{issignup ?"Signup": "Log in"}</button>
{
  issignup && (
    <p style={{color: "#666767", fontSize :"13px"}}> 
    By clicking "Sign up", you agree to our 
      <span style={{color:" #007ac6"}}>terms of<br/> service</span>  ,
      <span style={{color:" #007ac6"}}>privacy policy</span>  and
      <span style={{color:" #007ac6"}}>cookie policy </span>
       </p>
  )
}
</form>
<p>
  {issignup ? 'Already have account?': "Don't have an account?"}
  <button type='button' className='handle-switch-btn' onClick={handleswitch}>{issignup ?"Log in": "Sign up"}</button>
</p>
</div>
</section>
  );
}
export default Auth