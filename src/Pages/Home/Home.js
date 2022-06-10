import React from 'react';
import ContactMe from './ContactMe';
import Header from './Header';
import Project from './Project';
import MySkills from './MySkills'

const Home = () => {
    return (
        <div>
            <Header></Header>
            <MySkills></MySkills>
            <Project></Project>
            <ContactMe></ContactMe>
        </div>
    );
};

export default Home;