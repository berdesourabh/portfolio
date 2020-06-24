import React, { Fragment } from 'react';
import Header from './Header';
import Home from './Home';
import Skills from './Skills';
import Blogs from './Blogs';
import About from './About';
import Footer from './Footer';

import avatar from '../img/img2.jpg';

import './App.css';

const App = () => {
    return (
        <div className='app'>
            <Header />
            <section id ="home">
                <Home />
            </section>
            <section id ="skills">
                <Skills />
            </section>
            <section id ="blogs">
                <Blogs />
            </section>
            <section id ="about">
                <About />
            </section>
            <Footer />
            
        </div>
    );
}

export default App;