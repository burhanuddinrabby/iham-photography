import React from 'react';

const style = {
    textAlign: 'center',
    height: '50vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.2rem',
}
const About = () => {
    return (
        <div style={style}>
            <div>
                <h1>I'm Burhan Uddin</h1>
                <p>I'm a student. I passed Higher Secondary level in 2021. <br />
                    I'm preparing myself for university admission. <br /> Besides I'm learning web development from Jhankar Mahbub sir. <br /> My goal is to become CEO of Google or Microsoft. -_- <br />
                    I love to learn new things and I'm always curious about unknown things <br />
                </p>

            </div>
        </div>
    );
};

export default About;