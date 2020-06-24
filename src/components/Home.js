import React from 'react';
import img from '../img/img2.jpg';
import './css/Home.css';

const Home = () => {
    return (
    <div className='home-container'>
        <div className='description'>
            <div className="intro">
                <h1>Hi, I am Sourabh Berde</h1>
                <h3>Java Developer</h3>
            </div>
            <div>
                <img src={img} alt='Sourabh Berde' className='home-image'/>
            </div>
        </div>
    </div>
    );
}

export default Home;