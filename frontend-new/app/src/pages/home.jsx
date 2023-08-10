import React from "react";
import Header from './header';

function Home() {
  return (
    <div>
      <Header />
      <div className='container text-section mt-1'>
        <h1>Welcome to SpotAI</h1>
        <h2>Meet the Team</h2>
        <div className='team-section'>
          <p><strong>Backend Developers:</strong> Om Mahalingam, Abby Hirobe</p>
          <p><strong>Frontend Developers:</strong> Andi Liu, Orlando Nell</p>
          <p><strong>Project Manager:</strong> Dhandeep Suglani</p>
        </div>
        <div className='journey-section'>
          <p>Building SpotAI was an exciting and challenging journey. Through the coding process, we encountered and overcame numerous obstacles, ranging from algorithmic complexities to intricate user interface design.We spent a significant amount of time brainstorming and experimenting with various ideas to craft an intelligent and responsive AI chatbot. Our focus was to make SpotAI not just functional but also engaging and versatile to suit a wide range of user needs. Our collaborative efforts, coupled with innovative thinking and relentless determination, have led us to create a product we're truly proud of. We hope you enjoy using SpotAI as much as we enjoyed building it!</p>
        </div>
      </div>
    </div>
  );
}

export default Home;