import React from 'react'

const Navbar = () => {
  return (
    <div className="inline-flex w-screen space-x-24 items-center justify-center px-10 pt-16 pb-5">
    <p className="w-20 text-sm font-medium tracking-wider leading-tight text-center text-white uppercase">Team</p>
    <div className="w-20 h-20 bg-black rounded-lg">
      <img src = 'assets\Vector (1).png' alt = "Logo"></img>
    </div>
    <p className="w-20 text-sm font-medium tracking-wider leading-tight text-center text-white uppercase">SPONSOR</p>
</div>
  )
}

export default Navbar