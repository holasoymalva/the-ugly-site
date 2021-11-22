import React from "react";
import "./About.scss"

function About() {
    const listSkills = [
        '🌳 Node & Mongo',
        '🃏 Jest & Yarn 🐈',
        '⚛︎ React & React Native',
        '🅰️ Angular 9 - 10 - 12',
        '🪀 Vue.js & Vuex',
        '⛅️ Google & Azure Cloud Platform',
        '🫐 Heroku & Versel',
        '🧶 P5js & Brain . JS 🧠',
        '👁 Spark AR Studio',
        '🧿 Messenger Platform & Chatbots' 
    ]
    const social = [
        {
            title:"Github",
            link:"https://github.com/malvabombom"
        },
        {
            title:"Codepen",
            link:"https://codepen.io/malvabombom"
        },
        {
            title:"Linkedin",
            link:"https://www.linkedin.com/in/martin-manriquez-899877177/"
        }
    ]
    const listItems = listSkills.map((skill) =>
        <li>{skill}</li>
    );
    const listSocial = social.map((net) =>
        <li><a href={net.link}>{net.title}</a></li>
    );
    return(
        <div className="about fadeInAnimation">
            <div className="about__me">
                <h1>Hi I'm Martin 🤘</h1>
                <p>I'm a front end apasionate for Video Games, Data Sciences and Augmented Reality</p>
                <ul className="about__list">
                <h3>My Tech Stack:</h3>
                    {listItems}
                </ul>
            </div>
            <div className="about__img">
                <img src="https://scontent.fmex5-1.fna.fbcdn.net/v/t39.30808-6/241750698_4446215715458068_1965252228190280499_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=TVErYAKonSYAX-IbZOp&_nc_ht=scontent.fmex5-1.fna&oh=26bad11e28ea838b346738334491057f&oe=61839278" alt="" />
                <ul className="about__list">
                <h4>Follow My Work:</h4>
                    {listSocial}
                </ul>
            </div>
        </div>
    );
}

export default About;