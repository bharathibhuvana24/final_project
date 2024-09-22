import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <header className='bg-slate-200 shadow-md'>
      <div className='flex flex-row justify-between mx-auto items-center p-3 max-w-6xl'>
        {/* logo+brand */}
        <Link to='/'>
        <h1 className='flex flex-wrap font-bold text-sm sm:text-xl'>
          <span className='text-slate-500'>Bharathi</span>
          <span className='text-slate-500'>Estate</span>
        </h1>        
        </Link>

        {/* search-bar */}
          <form className='bg-slate-100 p-2 flex rounded-lg items-center'>
            <input type="text" placeholder='search...' className='px-4 py-2 w-24 sm:w-64 focus:outline-none bg-transparent'/>
            
          </form>

        {/* listing */}
          <ul className='flex gap-4'>
            
            <Link to='/'>
            <li className='hidden sm:inline hover:underline text-slate-700'>Home</li>
            </Link>
            
            <Link to='/about'>
            <li className='hidden sm:inline hover:underline text-slate-700'>About</li>
            </Link>
            
            <Link to='/sign-in'>
            <li className='hidden sm:inline hover:underline text-slate-700'>Sign-In</li>
            </Link>
          
          </ul>

    
      </div>
    </header>
  )
}

export default Header