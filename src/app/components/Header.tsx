import React from 'react'
import Link  from 'next/link'

const Header = () => {
  return (
    <div>
        <nav className='bg-black text-white py-4 px-5 flex justify-between items-center'>
            <h1 className='text-xl'>Logo</h1>

            <ul className='flex items-center gap-6'>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/">About Us</Link></li>
                <li><Link href="/">Contact Us</Link></li>
                <li><Link href="/">Log In</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Header