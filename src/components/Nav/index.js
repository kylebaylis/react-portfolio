import React from 'react';

function Nav(props) {
    const {
        setPortfolioSelected,
        setContactSelected,
        setResumeSelected
    } = props;
    
    return (
        <nav>
            <ul className="flex-row">
                <li>
                    <a href="#about" onClick={() => {
                        setPortfolioSelected(false);
                        setContactSelected(false);
                        setResumeSelected(false);
                    }}>
                        About Me
                    </a>
                </li>
                <li>
                    <a href="#portfolio" onClick={() => {
                        setPortfolioSelected(true);
                        setContactSelected(false);
                        setResumeSelected(false);
                    }}>
                        Portfolio
                    </a>
                </li>
                <li>
                    <a href="#contact" onClick={() => {
                        setContactSelected(true);
                        setPortfolioSelected(false);
                        setResumeSelected(false);
                    }}>
                    Contact
                    </a>
                </li>
                <li>
                    <a href="#resume" onClick={() => {
                        setResumeSelected(true);
                        setPortfolioSelected(false);
                        setContactSelected(false);                        
                    }}>
                    Resume
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;