import React, { useReducer } from 'react'
import {BrowserRouter ,Routes,Route} from 'react-router-dom'
import Login from './Login';
import Home from './Home';
import About from './About';
import Profile from './Profile';
import Detail from './Detail';
import { authContent } from './Context/AuthCont';
import { authReducer, initialState } from './Context/Reducer';

const Routing = () => {

  const [state, dispatch] = useReducer(authReducer, initialState);


  return(
   <authContent.Provider value = {{state, dispatch}}>
      <BrowserRouter>
         <Routes>
            <Route path='/login' element={<Login></Login>}></Route>
            <Route path='/home' element={<Home></Home>}></Route>
            <Route path='/detail' element={<Detail></Detail>}></Route>
            <Route path='/about' element={<About></About>}></Route>
            <Route path='/profile/:id/:name' element={<Profile></Profile>}></Route>
            <Route path='*' element={<h1>Page not found...!!!</h1>}></Route>
         </Routes>
      </BrowserRouter>
  </authContent.Provider>
)}

export default Routing