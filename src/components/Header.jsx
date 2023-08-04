import React from 'react'
import { useContext } from 'react';
import { ThemeContext } from '../App';
import ThemeButton from './Theme'

const Header = () => {
    const { strings, bahasa, setBahasa, projectRef } = useContext(ThemeContext);
    return (
        <header className={`header`}>
            <h1 className="h1">My<span className='text-blue-700'>Portofolio</span></h1>
            <nav className='flex justify-between md:gap-10 items-center'>
                <ul className='ul'>
                    <li>Blog</li>
                    <li>GitHub</li>
                    <li>LinkedIn</li>
                </ul>
                <div className='flex justify-end gap-5 items-center font-bold absolute top-3 right-4 md:static'>
                    <span className='text-lg lg:text-3xl'>{strings[bahasa].theme}</span>
                    <ThemeButton />
                </div>
                <div className='flex justify-end gap-5 items-center font-bold md:static'>
                    <span className='text-lg lg:text-3xl'>
                        {
                            strings[bahasa].language
                        }
                    </span>
                    <button onClick={() => {
                        (bahasa == 'id') ? setBahasa('en') : setBahasa('id')
                    }}>{strings[bahasa].country}
                    </button>
                </div>
                {/* <div className='flex justify-end gap-5 items-center font-bold md:static'>
                    <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Scroll to Top</button>
                </div> */}
                <div className='flex justify-end gap-5 items-center font-bold md:static'>
                    <button onClick={() => {
                        projectRef.current.scrollIntoView({
                            behavior: 'smooth',
                            // block: 'nearest',
                            inline: 'center'
                        })
                    }}>Scroll to Project</button>
                </div>
            </nav>
        </header>
    )
}

export default Header