import React from 'react'
import { useContext } from 'react';
import { ThemeContext } from '../App';
import ThemeButton from './Theme'

const Header = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <header className={`header-${theme} header`}>
            <h1 className="h1">My<span className='text-blue-700'>Portofolio</span></h1>
            <nav className='flex justify-between md:gap-10 lg:gap-40 items-center'>
                <ul className='ul'>
                    <li>Blog</li>
                    <li>GitHub</li>
                    <li>LinkedIn</li>
                </ul>
                <div className='flex justify-end gap-5 items-center font-bold absolute top-3 right-4 md:static'>
                    <span className='text-lg lg:text-3xl'>Theme : </span>
                    <ThemeButton />
                </div>
            </nav>
        </header>
    )
}

export default Header