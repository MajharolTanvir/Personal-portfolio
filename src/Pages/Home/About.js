import React from 'react';
import image from '../../Utilities/about/animation_500_l48kv2qd.gif'

const About = () => {
    return (
        <div id='about' className='container mx-auto my-10 mb-10'>
            <div className='mb-10 text-gray-300'>
                <h4 className='text-3xl font-bold'>About me</h4>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 items-center'>
                <div>
                    <img src={image} alt="" />
                </div>
                <div className='text-center'>
                    <p className='text-gray-300 text-justify'>I am trying to focus and build my career as React developer. I have good Knowledge of Html, Css , Css framework ,Javascript, React, react packages and more think. Day by day I try and want to grow up my skills. I want to do a lot of big projects.</p>
                </div>
            </div>
        </div>
    );
};

export default About;