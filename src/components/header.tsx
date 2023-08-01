"use client"

import React, { useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import { Button } from './ui/button';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import OnPointLogo from '~public/On_Point_Charters_Logo.png'

type NavLink = {
    text: string,
    href: string
}

export const Header: React.FC = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const nav_links: NavLink[] = [
        { text: 'Home', href: '/' },
        { text: 'About', href: '/about' },
        { text: 'Gallery', href: '/gallery'},
        { text: 'Services', href: '/services' },
    ]

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen)
    }

    return (
        <header className='sticky top-0 z-10 p-4 w-full border-b bg-background text-foreground'>
            <div className='flex items-center justify-center gap-4'>
                {/* Mobile menu button */}
                <Button variant={'ghost'} className='md:hidden mr-auto' onClick={toggleMobileMenu}>
                    {mobileMenuOpen ? <XMarkIcon className='w-6 h-6 text-foreground' /> : <Bars3Icon className='w-6 h-6 text-foreground' />}
                </Button>

                {/* Logo */}
                <Link href='/' className='mr-auto md:m-0' passHref>
                    <Image src={OnPointLogo} alt='On Point Charters Logo' className='h-16 w-16 md:w-20 md:h-20 md:scale-110' />
                </Link>

                {/* Desktop navigation */}
                <div className='hidden md:flex md:ml-auto'>
                    <nav className="flex justify-center space-x-4">
                        {nav_links.map((link, index) => (
                            <div key={index} className="w-full flex py-2 px-4 rounded-md justify-center hover:bg-primary hover:text-primary-foreground">
                                <Link href={link.href} className="cursor-pointer relative w-full flex justify-center" >{link.text}</Link>
                            </div>
                        ))}
                    </nav>
                </div>
            </div>

            {/* Mobile menu navigation */}
            {mobileMenuOpen && (
                <nav className='flex flex-col items-center my-8 transition-all duration-200'>
                    {nav_links.map((link, index) => (
                        <Link key={index} href={link.href} onClick={toggleMobileMenu} className='text-lg'>{link.text}</Link>
                    ))}
                </nav>
            )}
        </header>
        
    )
}