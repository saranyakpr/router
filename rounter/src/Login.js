import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
   
    const navigate = useNavigate();
    const goToHome=()=>{
        navigate('/home')
    }

  return (
    <div>
        Login <Link to='/home'>Home</Link>
        <button onClick={()=>goToHome()}>click goto home</button>
              <Link to='/about'>About</Link>
              <Link to='/profile/003/saran'>Profile</Link>
    </div>
  )
}

export default Login