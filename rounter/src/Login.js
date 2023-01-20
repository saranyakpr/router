import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
   
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

  return (
    <div>
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