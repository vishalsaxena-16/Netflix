import React, { useEffect,useState } from 'react'
import './css/nav.css'
import firebase from "firebase/compat/app"
import "firebase/compat/auth";
function Nav() {
    const [show,handleShow] = useState(false);
    const transitionNavbar =() =>{
        if (window.scrollY>100)
        {
            handleShow(true)

        }
        else{
            handleShow(false)
        }
    }
    useEffect(()=>{
        window.addEventListener('scroll',transitionNavbar)
        return()=>{
            window.removeEventListener('scroll',transitionNavbar)
        }
    },[])

  return (
    
       <div className={`nav ${show && "nav__black"} `}>
        <div className='nav__content'>
            <img className='logo' src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png'/>
                <img className='nav_avatar ' src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' onClick={()=>firebase.auth().signOut()}/>


        </div>
       </div>
    
  )
}

export default Nav