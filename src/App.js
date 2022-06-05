import './App.css';
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import { Routes, Route, Link } from "react-router-dom";
import anime from './anime.jpg';
import currency from './currency.jpg';
import dashboard2 from './dashboard-2.jpg';
import hack2b from './hack2-2.jpg';
import UrlShort from './UrlShort.JPG'
import capstone from './capstone.JPG'
import mentor from './mentor.jpg';
import sport from './sport.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="hello" element={<Hello />} />
      </Routes>
    </div>
  );
}
function Home() {
  return (
    <>
      <div div className='header'>
        <div className='hello-ranjith'>
          <div >
            <div className='name'>Hi! I'm Ranjith Cheerla</div>
            <div className='profession'>Full Stack Developer</div>
          </div>
          <div>
            <Link to="/hello" className='hello'>Say Hello!</Link>
          </div>
        </div>
      </div>
      <div className='content-container'>
        <div className='heading'>About me</div>
        <div className='content'> I design frontend and backend Web Applications. Im currently working as tech cell manager
        at office of career services, IIT Hyderabad. I worked as intern for 4 months the
          startup Sabz to maintain the mobile app. Im open for the new opportunities. </div>
        <div className='content'>I prefer to keep learning, and doing challenging things. Im highly enthusiastic,
          inspirational and entertain the people around me. I boost my energy levels with the work I do. Im passionate
          and fast learner </div>
        <div className='content'>You can read about my skills, education, experience in the resume attached below</div>
        <div className="resume"><a href="https://docs.google.com/document/d/1NgnhREOChapb1Ooworh8i771Vcv85QeqwnVrWcxk45I/edit?usp=sharing">Download Resume</a></div>
        <div className='heading'>My works</div>
        <div className='stack-name'>Full stack applications</div>
        <div className='grouped-images'>
          <a href="https://guvi-hackathon2-ranjith.netlify.app/" target="_blank" rel="noopener noreferrer">
            <img src={hack2b} alt="" />
          </a>
          <a href="https://capstone-ranjith.netlify.app/" target="_blank" rel="noopener noreferrer">
            <img src={capstone} alt="" />
          </a>
          <a href="https://urlshortener-frontend-ranjith.netlify.app/" target="_blank" rel="noopener noreferrer">
            <img src={UrlShort} alt="" />
          </a>
        </div>

        <div className='stack-name'>Frontend applications</div>
        <div className='grouped-images'>
          <a href="https://ranjith-b25bwd-dashboard-task.netlify.app/" target="_blank" rel="noopener noreferrer">
            <img src={dashboard2} alt="" />
          </a>
          <a href="https://assign-mentor-ranjith.netlify.app/" target="_blank" rel="noopener noreferrer">
             <img src={mentor} alt="" />
             </a>
        </div>
        <div className='stack-name'>Other websites</div>
        <div className='grouped-images'>
        <a href="https://ranjith-b251wd-hackathon1-animeapi.netlify.app/" target="_blank" rel="noopener noreferrer">
           <img src={anime} alt="" />
           </a>
           <a href="https://ranjith-b251wd-apitask2-currencyapi.netlify.app/" target="_blank" rel="noopener noreferrer">
             <img src={currency} alt="" />
             </a>
             <a href="https://ranjith-b251wd-apitask3-sportsapi.netlify.app/" target="_blank" rel="noopener noreferrer">
               <img src={sport} alt="" />
               </a>
        </div>
        <div className='heading'>Skills</div>
        <div className='skills'>
          <div className='skill-table'>
            <div className='stack-name'>Frontend</div>
            <div className='skills-list'>
              Reactjs, Material-ui, Fontawesome, AWS (basics), HTML, CSS, Bootstrap, React native,
              Chartjs, git, Netlify
            </div>
          </div>
          <div className='skill-table'>
            <div className='stack-name'>Backend</div>
            <div className='skills-list'>
              Nodejs, Expressjs, MongoDB, MySQL, firebase, JWT, nodemailer, Heroku</div>
          </div>
        </div>
        <div className='heading'>My profiles</div>
        <div className='profiles'>
          <a href="https://www.linkedin.com/in/ranjith-cheerla/">
            <FontAwesomeIcon icon={faLinkedin} size='2x' />
          </a>
          <a href="https://github.com/RC13967">
            <FontAwesomeIcon icon={faGithub} size='2x' />
          </a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ranjithch137@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} color='red' size='2x' />
          </a>
          <a href="https://www.facebook.com/ranjith.cheerla">
            <FontAwesomeIcon icon={faFacebook} size='2x' />
          </a>
        </div>
      </div>
    </>
  );
}
function Hello() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_gjmapmi', 'template_pun3xl9', form.current, 'tLjdp2LxoYDBtVTGC')
    .then((result) => {
      console.log(result.text); 
    }, (error) => {
        console.log(error.text);
    });
    alert("message sent")
  }
  return (
    <form ref={form} onSubmit={sendEmail}>
    <div className='hello-container'>
      <input type="text" placeholder='name' name="user_name" /><br />
      <input type="email" placeholder='email' name="user_email" /><br />
      <textarea placeholder='message: (eg.Impressed by yor portfolio *_* )'
       name="message" /><br/>
      <input type="submit" value="Send" className='hello send-message' />
    </div>
  </form>
  )
}
export default App;
