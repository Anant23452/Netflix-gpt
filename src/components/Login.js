import React, { useState } from 'react'
import Header from './Header'

function Login() {
    const [signup, setsignup] = useState(false)
    const signupHandler = () => {
        setsignup(!signup);
    }
    return (
        <div className='relative bg-black-600    ' >
            <Header />
            <img className='' src="https://www.techhive.com/wp-content/uploads/2023/10/Netflix-Hintergrund.jpg?quality=50&strip=all " alt="" />
            <form action="" className='bg-black-500 p-12  absolute top-1/4 left-1/3 flex flex-col gap-4 z-99 w-1/3 h-[70vh] bg-gray-800 bg-opacity-80 items-center '>
                <h2 className='text-2xl font-bold text-white  '>{signup ? "Sign up" : "Sign in"} </h2>
                <input type="text" placeholder='Email' className='p-3 rounded-md px-10  bg-transparent border-2 placeholder:text-xl' />
                <input type="text" placeholder='Password' className='p-3 rounded-md px-10 bg-transparent border-2 placeholder:text-xl  ' />
                < button className='bg-red-600 text-white px-28 py-3 rounded-md text-xl font-bold  ' type='button' >Sign In</button>
                <div className="flex justify-center items-center gap-4 text-white">
                    <div className="w-20 border-b-2  "></div>
                    <p>or</p>
                    <div className="w-20 border-b-2  "></div>
                </div>
                <p className='text-white'>new on netflix?</p>
                <button
                    type="button"
                    className='bg-gray-900 text-white px-20 py-3 rounded-md text-l font-bold'
                    onClick={signupHandler}
                >
                    Sign Up
                </button>

            </form>
        </div>
    )
}

export default Login