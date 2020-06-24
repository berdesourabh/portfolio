import React from 'react';
import spring from '../img/spring.svg';
import react from '../img/reactjs.svg';
import postgres from '../img/postgres.svg';
import docker from '../img/docker.svg';
import github from '../img/github.svg';
import kubernetes from '../img/kubernetes.svg';

import './css/Skills.css';
const Skills = () => {
    return(
        <div class="skills-container">
            <h1>Skills</h1>
        <div class="skills">
            <div class="card spring">
                <h2>Spring Boot</h2>
                <p>4 years of experience in spring boot</p>
                <img src={spring} alt="Spring Boot" />
            </div>

            <div class="card react">
                <h2>React Js</h2>
                <p>2 years of experience in React Js</p>
                <img src={react} alt="ReactJs" />
            </div>

            <div class="card postgres">
                <h2>Postgres</h2>
                <p>4 years of experience in Postgres</p>
                <img src={postgres} alt="Postgres" />
            </div>

            <div class="card docker">
                <h2>Docker</h2>
                <p>Good understanding of docker</p>
                <img src={docker} alt="Docker" />
            </div>

            <div class="card github">
                <h2>Github</h2>
                <p>4 years of experience working with Github</p>
                <img src={github} alt="Github" />
            </div>
            <div class="card kubernetes">
                <h2>Kubernetes</h2>
                <p>Good understanding of Kubernetes</p>
                <img src={kubernetes} alt="Kubernetes" />
            </div>
    </div>
    </div>
    );
}

export default Skills;