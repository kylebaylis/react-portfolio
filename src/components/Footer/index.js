import React from 'react';
import {AiFillGithub} from 'react-icons/ai';
import {AiFillLinkedin} from 'react-icons/ai';
import {AiFillTwitterCircle} from 'react-icons/ai';

function Footer() {
    return (
        <section className='centered'>
            <ul>
                <li>
                    <a href="https://github.com/kylebaylis" target="_blank" rel="noreferrer">
                        <AiFillGithub size={64} />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/kylebaylis/" target="_blank" rel="noreferrer">
                        <AiFillLinkedin size={64} />
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/kylebaylis" target="_blank" rel="noreferrer">
                        <AiFillTwitterCircle size={64} />
                    </a>
                </li>
            </ul>
        </section>
    );
}

export default Footer;