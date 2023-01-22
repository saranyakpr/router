import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { authContent } from './Context/AuthCont'

const Login = () => {

  const {state,dispatch} = useContext(authContent);
  console.log("state", state);
   
    const navigate = useNavigate();
    const goToHome=()=>{
        navigate('/home')
    }

    const goToDetail=()=>{
      navigate({
        pathname:'/detail',
        search:'?id=003&name=saran',
      }
      )
  }

  const login = () => {
    dispatch({
      type:'LOGIN',
      payload:true,
    });
  }

  return (
    <div>
      <button variant="contained" onClick={() => login() }>login</button>
        Login <Link to='/home'>Home</Link>
        <button onClick={()=>goToHome()}>click goto home</button>
        <button onClick={()=>goToDetail()}>click goto detail</button>
              <Link to='/detail'>Detail</Link>
              <Link to='/about'>About</Link>
              <Link to='/profile/003/saran'>Profile</Link>
    </div>
  )
}

export default Login