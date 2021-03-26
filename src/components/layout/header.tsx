import React from 'react'
import { Link } from 'react-router-dom'

export type IProps = {
    show?: boolean,
    handleSearch?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Header: React.FC<IProps> = ({ show, handleSearch }) => {
    return <header className="header">
        <div className="header__brand">
            <Link to="/"><h3>Kanyimuta Test</h3></Link>
        </div>
        {show && <form className='header__form'>
            <input className="header__search" placeholder='Search for movies' onChange={handleSearch} />
        </form>}
    </header>
}
export default Header