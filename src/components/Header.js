import React from 'react'

function Header() {
  return (
    <div>
        <div className="nav w-full h-20  flex justify-between items-center px-20 py-4 bg-gradient-to-b from-black to-transparent absolute ">
            <div className="img w-[15vw] h-[6rem]">
                 <img src="https://logos-world.net/wp-content/uploads/2020/04/Netflix-Logo.png" alt="" />
            </div>
            <div className=" flex justify-center items-center gap-4">
                <button className="bg-red-900 text-white px-2 py-1 rounded">Sign In</button>
                 
         <select
          id="language"
        
          className="bg-gray-800 border border-gray-600 text-white rounded-md px-2 py-1 focus:outline-none"
        >
          <option value="English">English</option>
          <option value="Hindi">Hindi</option>
          <option value="Marathi">Marathi</option>
          <option value="Tamil">Tamil</option>
        </select>
            </div>
        </div>
       
    </div>
  )
}

export default Header