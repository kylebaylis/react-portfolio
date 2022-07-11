import React from 'react';

function About() {
    return (
        <div>
            <h2>About Me</h2>
            <img src={require(`../../assets/images/egg.jpg`)} alt="egg" />
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consequat eros in rhoncus consequat. 
                Sed pharetra urna est, non commodo libero pellentesque ut. Nullam at mauris a felis lobortis gravida. 
                Nullam vehicula dui sed elit commodo, at semper nunc suscipit. Class aptent taciti sociosqu ad litora 
                torquent per conubia nostra, per inceptos himenaeos. Vestibulum ante ipsum primis in faucibus orci luctus 
                et ultrices posuere cubilia curae; Nunc ipsum nisl, euismod eu enim nec, maximus pellentesque eros. Aliquam 
                erat volutpat. Cras vel placerat ipsum. Phasellus luctus, nunc a vestibulum viverra, nisl leo mollis nunc, 
                ultrices ultrices nisi mauris ut eros. Nam.
            </p>
        </div>

    );
}

export default About;