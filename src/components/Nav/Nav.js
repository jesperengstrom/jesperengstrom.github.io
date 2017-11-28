import React from 'react';
import PropTypes from 'prop-types';

//CSS
import './Nav.css';
import '../../font/fontello-62f4623a/css/fontello.css';

//Smooth scroll polyfill
require('smoothscroll-polyfill').polyfill();

function Nav({ next, last }){

    function scrollTo(){
        document.querySelector('#' + next).scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <nav className="nav flex justify-center">
            <div className='fixed fixed-top flex flex-column align-center'>
                <a href="mailto:jengstro@gmail.com">
                    <i className="anticon large-icon">&#xe659;</i>
                </a>
                {/* <a href="https://github.com/jesperengstrom">
                    <i className="anticon large-icon">&#xe6ad;</i>
                </a> */}
                <a href="https://www.linkedin.com/in/jesper-engstr%C3%B6m-116b77103/" rel="noopener noreferrer" target="_blank">
                    <i className="large-icon icon-linkedin-squared"></i>
                </a>
            </div>
            <div className="fixed fixed-bottom flex align-end" style={{height:'33%'}}>
            <a onClick={scrollTo} className={`transition-flip ${last ? 'flip' : ''}`}>
                <i className="anticon large-icon">&#xe619;</i>
            </a>
            </div>
        </nav>
        );
    }

Nav.propTypes = {
    next: PropTypes.string,
    last: PropTypes.bool.isRequired
};

export default Nav;