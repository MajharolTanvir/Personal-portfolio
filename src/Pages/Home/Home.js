import React from 'react';
import ContactMe from './ContactMe';
import Header from './Header';
import Project from './Project';
import MySkills from './MySkills'
import About from './About';
import WorkDetails from './WorkDetails'

const Home = () => {
    return (
        <div>
            <Header></Header>
            <About></About>
            <MySkills></MySkills>
            <WorkDetails></WorkDetails>
            <Project></Project>
            <ContactMe></ContactMe>
        </div>
    );
};

export default Home;