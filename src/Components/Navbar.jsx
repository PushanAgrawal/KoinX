import React from 'react'
import mysvg from "../assets/klogo.svg";
import menusvg from "../assets/menu.svg"
const Navbar = () => {
  const menu =() =>
  {
    console.log("hi")
  }
  return(
  <>
<nav className='bg-white '>
  <div className=' relative    flex justify-between p-2 text-black	'>
    <div className='flex items-center justify-center ml-8 '>
<img className='' src={mysvg}></img>
    </div>
    <div className=' items-center justify-center gap-8 font-semibold mr-10  font-sans-Inter hidden md:flex'>
  <span>Crypto Taxes</span>
  <span>Free Tools</span>
  <span>Resource Center</span>
  <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Get Started</button>
    </div>
    <div className='flex  items-center justify-center mr-10  md:hidden'>
      <img src={menusvg} onClick={()=>menu()}></img>
    </div>
  </div>


</nav>

  </>
  )
}

export default Navbar