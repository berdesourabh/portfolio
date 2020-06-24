import React from 'react';
import './css/Header.css';
import avatar from '../img/img1.jpg';
const Header = () => {
    return (
        <div className='header-container'>
            <nav>
                <div className='row'>
                    <div className='brand-name'>
                        <h2><a href='#home' className='active'>Sourabh Berde</a></h2>
                    </div>
                    <div className='navbar'>
                        <ul>
                            <li><a href='#home' className='active'>Home</a></li>
                            <li><a href='#skills' className='active'>Skills</a></li>
                            <li><a href='#blogs' className='active'>Blogs</a></li>
                            <li><a href='#about' className='active'>About</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;