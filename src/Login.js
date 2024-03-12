import{ React, useState} from 'react'
import "./css/login.css"
import SignUp from "./SignUp";
function Login() {
    const [signIn,setsignIn] = useState(false)
    const setlogIn = (e)=>{
        e.preventDefault();
        setsignIn(true);

    }
    return (
        
        <>
            <div>
                <div className="login">
                    <div className="login_header">
                       <img className='logo'  src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"/>
                    
                    <button className="login_button">
                        Sign In
                    </button>
                    <div className="login_body">{
                        signIn?( <SignUp/>):(
                        <>
                        <h1>Unlimited films, TV Programs and more</h1>
                        <h2>Watch anywhere cancel at anytime</h2>
                        <h3>Ready to watch ? Enteryour email to create your membership</h3>
                        <form className="login_form"  onSubmit= {setlogIn}>
                            <input type="text" placeholder="Email address"/>
                            <button> Get Started</button>
                        </form>
                        </>)
                    }
                       
                    </div>
                    <div className="login_gradient">
                        
                    </div>

                </div>

            </div>
        </div >
    </>
  )
}

export default Login
