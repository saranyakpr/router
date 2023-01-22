import React, { useContext } from 'react'
import { authContent } from './Context/AuthCont'


const About = () => {

  const state = useContext(authContent);
  console.log("state", state);


  return (
    <div>About</div>
  )
}

export default About