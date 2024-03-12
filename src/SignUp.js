import {React,useRef} from 'react'
import "./css/login.css"
import {auth} from "./firebase";

export default function SignUp(){
  const emailRef= useRef(null)
  const passwordRef= useRef(null)

  const register = (e) =>{
    e.preventDefault()
    alert(emailRef.current.value)
    auth.createUserWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    ).then(authUser=>{console.log(authUser)})
    .catch(error=>{
      alert(error.message)
    })
  }
  const signIn = (e) =>{
    e.preventDefault()
    auth.signInWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    ).then(authUser=>{console.log(authUser)})
    .catch(error=>{
      alert(error.message)
    })
    

  }
  return (
    <div>
      <div className="signUpScreen">
        <form>
          <h1>Sign In     </h1>
            <input type ="email" ref={emailRef} placeholder='email'/>
            <input type='password' ref={passwordRef} placeholder='password'/>
            <button onClick={signIn}> Sign In</button>
            <h4>New to Netflix ?<span onClick={register}> SignUp Now</span></h4>
      
        </form>
      </div>
    </div>
  )
}
