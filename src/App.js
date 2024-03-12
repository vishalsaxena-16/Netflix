import React,{useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Login from './Login';
import HomeScreen from './HomeScreen';
import {auth} from "./firebase";
import { login, logout ,selectUser} from './features/userSlice';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();


  useEffect(() => {
   const unsubscribe=auth.onAuthStateChanged(user=>{
    if(user)
    {
      dispatch(login({
      uid:user.uid,
      email:user.email
      }))
    }
    else{
       dispatch(logout)
    }
   })
   return unsubscribe();
  },[])
  
  return (
    <>{
    !user ? (<Login/>):(<HomeScreen/>) 
    }
    </>
  );
}

export default App;
