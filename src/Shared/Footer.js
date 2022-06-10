import React from 'react';

const Footer = () => {
    let getYear = () => {
        let currentYear = new Date().getFullYear();
        return currentYear;
    };
    return (
        <footer className="bg-gray-900 text-center lg:text-left mt-20">
            <div className="text-gray-300 text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
                <p className="m-0 text-center text-white">
                    Copyright &copy;
                    <span> {getYear()} <a target='_blank' rel="noreferrer" className="text-gray-300" href="https://www.facebook.com/MajharulTanvir.rgt/">Made with Tanvir🔥</a> </span>
                </p>
            </div>
        </footer >
    );
};

export default Footer;