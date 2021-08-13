import React from 'react'
import Menu from './Menu'
import './App.css'

const Header = ({event}) => {

    return (
        <>
            <header className='header'>
                <Menu event={event} />
            </header>
        </>
    )
}

export default Header