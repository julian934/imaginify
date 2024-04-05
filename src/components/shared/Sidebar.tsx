'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { navLinks } from '@/app/constants'
import { usePathname } from 'next/navigation'
import { Button } from '../ui/button'

const Sidebar = () => {
    const pathname=usePathname()
  return (
    //tailwind classes in this project are defined in globals, which create preset values for you to use.
    <aside className=" sidebar " >
        Sidebar
        <div className='flex size-full flex-col gap-4' >
            <Link href='/' className='sidebar-logo' >
                <Image src='/assets/images/logo-text.svg' alt="logo" width={80} height={28}  />
            </Link>
            <nav className="sidebar-nav" >
                <SignedIn>
                    <ul className='sidebar-nav_elements' >
                        {navLinks.map((link)=>{
                            const isActive=link.route===pathname
                            return(<li key={link.route} className={`sidebar-nav_element group ${isActive?'bg-purple-gradient text-white':'text-gray-700'}`}  >
                                      {link.label}
                                      <Link className="sidebar-link" href={link.route} >
                                        <Image
                                        src={link.icon}
                                        alt='logo'
                                        width={24}
                                        height={24}
                                        className={`${isActive && 'brightness-200'}`}
                                        />
                                      </Link>
                            </li>)
                        })}
                    </ul>
                        <ul className='sidebar-nav_elements' >
                        <li className='flex-center cursor-pointer gap-2 p-4' >
                            <UserButton afterSignOutUrl='/' showName  />
                        </li>
                        </ul>
                        
                    
                </SignedIn>
                <SignedOut>
                    <Button asChild className='button bg-purple-gradient bg-cover' >
                        <Link href='/sign-in' >Login</Link>
                    </Button>
                </SignedOut>
            </nav>
        </div>
        </aside>
  )
}

export default Sidebar