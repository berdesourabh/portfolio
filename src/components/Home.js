import React from 'react';
import Typical from 'react-typical';
import img from '../img/img2.jpg';
import './css/Home.css';

const Home = () => {
    return (
    <div className='home-container'>
        <div className='description'>
            <div className="intro">
                <h1>Hi, I am Sourabh Berde</h1>
                <Typical 
                    loop={Infinity}
                    wrapper="b"
                    steps={[
                        'Java Developer',
                        1000,
                        'UI Enthusiast',
                        1000,
                        'Cricket Lover',
                        1000
                    ]}
                />
                </div>
            <div>
                <img src={img} alt='Sourabh Berde' className='home-image'/>
            </div>
        </div>
    </div>
    );
}

export default Home;