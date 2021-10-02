import react from 'react'
import "../Style/About.css"
import logo from './logo.jpeg';
import "../Style/Nav.css"



function About() {
  return (
    <div className="About">

      <img className= "logo" src={logo} width="100" height="50" />
      <h1>I'M Sime</h1>

      <h2> I’m a Software Development Student at DigitalCraft   hopping to learn one thing at time.
      My passion for flight and travel took me over 17 countries and over 100 cities around the world.
      This page is built to share my experience and give backpacker, travel advice and also to receive one.</h2>


    </div>


  );
}

export default About;
