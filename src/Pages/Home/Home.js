import React from 'react';
import ContactMe from './ContactMe';
import Header from './Header';
import Project from './Project';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Project></Project>
            <ContactMe></ContactMe>
        </div>
    );
};

export default Home;