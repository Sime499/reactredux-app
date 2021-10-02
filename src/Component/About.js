import react from 'react'
import "../Style/About.css"
import logo from './logo.jpeg';
import "../Style/Nav.css"



function About() {
  return (
    <div className="About">
      <h1> Sime</h1>
      <h2> Software Developer/Accountant </h2>

      <div className="image">
         <img  src={logo} alt="myphoto" />
     </div>
         <p> I’m a Software Development Student at DigitalCraft   hopping to learn one thing at time.
         My passion for flight and travel took me over 17 countries and over 100 cities around the world.
         This page is built to share my experience and give backpacker, travel advice and also to receive one.</p>
          <a href="https://www.linkedin.com/in/sime-weldegebrile-70969b57/" className="btn">Get In Touch</a>

    </div>

  );
}

export default About;
