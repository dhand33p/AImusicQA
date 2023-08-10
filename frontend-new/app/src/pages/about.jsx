import React from 'react';
import Header from './header'
import './about.css';

function About() {
    return (
        <div>
          <div><Header/></div>
          <div className='container text-section mt-1'>
            <h2>Meet the Team</h2>
            <ul className='journey-sections'>
                    <li>Backend dev Abby is a sophomore in high school and enjoys playing volleyball, drawing, and listening to music</li>
                    <li>Om is a freshman in highschool who works on the backend team and during his free time likes to hang out with friends, play guitar, and play sports.</li>
                    <li>Andi is a junior high student and plays flute with local orchestras. She enjoys rock climbing and archery.</li>
                    <li>As the front-end designer for SpotAI, Orlando is an honor choir student in 2023 and a freshman in high school this year, making him one of the youngest members on the team.</li>
                    <li>Dhandeep is Dhandeep</li>

                </ul>
          </div>
        </div>
      );
}

export default About;