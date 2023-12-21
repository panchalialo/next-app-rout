import React from 'react'
import Link from 'next/link'

const SideBar = () => {
  return (
    <div>
        <div className='h-screen bg-black text-white w-[15vw]'>
            <ul className='py-4 px-5 flex flex-col gap-5'> 
                <li><Link href="/dashboard">Dashboard</Link></li>
                <li><Link href="/dashboard/todos">Todos</Link></li>
                <li><Link href="/dashboard/users">Users</Link></li>
                <li><Link href="/dashboard/profile">Profile</Link></li>
            </ul>
        </div>
        
    </div>
  )
}

export default SideBar