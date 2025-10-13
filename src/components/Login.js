import React, { useReducer, useRef, useState } from 'react'
import Header from './Header'
import { checkValidaData } from '../utils/Validate';

function Login() {
    const [signup, setsignup] = useState(false)
    const signupHandler = () => {
        setsignup(!signup);
    }
    //useRef for getting the value of the input fields
    const email =useRef("null");
    const password =useRef("null");
    const name =useRef("null");

    //error showing state
    const [error,setError]=useState(null);

   const handleButtonClick =()=>{
        //validation of the from  data 
        console.log(email.current.value);
        console.log(password.current.value);
        console.log(name.current.value);
  const message= checkValidaData(email.current.value,password.current.value,name.current.value);
        setError(message);
   } 
    return (
        <div className='relative bg-black-600    ' >
            <Header />
            <img className='' src="https://www.techhive.com/wp-content/uploads/2023/10/Netflix-Hintergrund.jpg?quality=50&strip=all " alt="" />
            <form action="" className='bg-black-500 p-12  absolute top-1/4 left-1/3 flex flex-col gap-4 z-99 w-1/3 h-[70vh] bg-gray-800 bg-opacity-80 items-center '>
                <h2 className='text-2xl font-bold text-white  '>{signup ? "Sign up" : "Sign in"} </h2>
                {
                    signup && (
                        <input type="text" placeholder='Name' ref={name} className='p-3 rounded-md px-10  bg-transparent border-2 placeholder:text-xl text-zinc-100 ' />
                    )
                }
                <input
                type="text"
                placeholder='Email'
                ref={email}
                className='p-3 rounded-md px-10  bg-transparent border-2 placeholder:text-x  text-zinc-100 '
                    />
                <input type="password" placeholder='Password'   ref={password}  className='p-3 rounded-md px-10 bg-transparent border-2 placeholder:text-xl text-zinc-100  ' />
                <p className='text-red-600'>{error} </p>
                < button className='bg-red-600 text-white px-28 py-3 rounded-md text-xl font-bold  ' type='button' onClick={handleButtonClick} >Sign In</button>
                <div className="flex justify-center items-center gap-4 text-white">
                    <div className="w-20 border-b-2  "></div>
                    <p>or</p>
                    <div className="w-20 border-b-2  "></div>
                </div>
                <p className='text-white'>new on netflix?
                    <span className='text-blue-600 cursor-pointer' onClick={signupHandler}>{signup ? "Sign in" : "Sign up"} </span>
                </p>
               
            </form>
        </div>
    )
}

export default Login