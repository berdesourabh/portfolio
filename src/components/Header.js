import React from 'react';
import './css/Header.css';
import { Link } from 'react-scroll';

const Header = () => {
    return (
        <div className='header-container'>
            <nav>
                <div className='row'>
                    <div className='brand-name'>
                        <h2><Link to='home' className='active' smooth duration={1000}>Sourabh Berde</Link></h2>
                    </div>
                    <div className='navbar'>
                        <ul>
                            <li><Link to='home' className='active' smooth duration={1000}>Home</Link></li>
                            <li><Link to='skills' className='active' smooth duration={1000}>Skills</Link></li>
                            <li><Link to='blogs' className='active' smooth duration={1000}>Blogs</Link></li>
                            <li><Link to='about' className='active' smooth duration={1000}>About</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header