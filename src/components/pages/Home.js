import React from 'react';
import Avatar from '../images/updated_avatar.jpg';
import BootstrapLogo from '../images/bootstrap.png';
import CSS3Logo from '../images/css3.png';
import ExpressLogo from '../images/express.png';
import GitHubLogo from '../images/github-logo.png';
import HTLM5Logo from '../images/html5.png';
import jQueryLogo from '../images/jQuery.png';
import JSLogo from '../images/JS.png';
import MERNLogo from '../images/mern.jpg';
import MySQLLogo from '../images/MySQL.jpg';
import NodeJSLogo from '../images/nodeJS.png';
import NPMLogo from '../images/npm.png';
import ReactLogo from '../images/React.png';
import MongoDBLogo from '../images/mongodb.png';
import GraphQL from '../images/graphQLlogo.png';
import Socketio from '../images/socketio.png';

const styles = {
  orangeFont: {
    color: '#D19A66',
  },
  purpleFont: {
    color: '#C678D2',
  },
  greenFont: {
    color: '#98C36E',
  },
  redFont: {
    color: '#E06A69',
  },
  blueFont: {
    color: '#61AFEF',
  },
  yellowFont: {
    color: '#E5C07B',
  },
};

const Home = () => {
  return (
    <div className='container'>
      <main className='row mt-3'>
        <div className='col'>
          <div className='card cardHome bg-dark w-100'>
            <div className='row card-body'>
              <img className='avatar mt-lg-5' src={Avatar} alt='sans' />
              <div className='col-sm-9'>
                <h2 className='card-title'>
                  <span style={styles.purpleFont}>const </span>
                  <span style={styles.yellowFont}>aboutMe </span>
                  <span style={styles.blueFont}>=</span>
                </h2>
                <hr className='text-white'></hr>
                <p className='card-text text-green' style={styles.greenFont}>
                  'Full-stack web developer with a background in
                  telecommunications to help create, deploy and troubleshoot
                  applications for a reliable user experience. I am a team
                  player and problem solver, reinforced by 15 years of taking on
                  tasks as assigned, managing time, working with internal and
                  external teammates, and delivering on both company and
                  customer expectations. Currently, I am obtaining a Certificate
                  in Full Stack Web Development from University of Pennsylvania.
                  developing skills in HTML, CSS, JavaScript, and responsive web
                  design. Each project I have taken on has pushed me to learn
                  something new or see an alternate approach. My most recent
                  project was with a team to develop a full-stack application
                  that would allow users to connect with each other to find
                  activities, whether online or in person. I can’t wait to use
                  my skills and experience to develop helpful experiences on the
                  Internet.'
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <section className='row mt-3'>
        <div className='col'>
          <div className='card cardHome text-end text-white bg-dark w-100'>
            <div className='row card-body'>
              <div className='col-sm-12'>
                <h3 className='card-title'>
                  <span style={styles.purpleFont}>let </span>
                  <span style={styles.redFont}>technicalSkills </span>
                  <span style={styles.blueFont}>=</span>
                </h3>
                <hr></hr>

                <div className='row'>
                  <img
                    className='tech-avatar'
                    src={HTLM5Logo}
                    height='auto'
                    width='70%'
                    alt='html5 logo'
                  />
                  <img
                    className='tech-avatar'
                    src={CSS3Logo}
                    height='auto'
                    width='70%'
                    alt='css3 logo'
                  />
                  <img
                    className='tech-avatar'
                    src={JSLogo}
                    height='auto'
                    width='70%'
                    alt='javascript logo'
                  />
                  <img
                    className='tech-avatar'
                    src={jQueryLogo}
                    height='auto'
                    width='70%'
                    alt='jquery logo'
                  />
                  <img
                    className='tech-avatar'
                    src={GitHubLogo}
                    height='auto'
                    width='70%'
                    alt='github logo'
                  />
                  <img
                    className='tech-avatar'
                    src={BootstrapLogo}
                    height='auto'
                    width='70%'
                    alt='bootstrap logo'
                  />
                  <img
                    className='tech-avatar'
                    src={NPMLogo}
                    height='auto'
                    width='70%'
                    alt='npm logo'
                  />
                  <img
                    className='tech-avatar'
                    src={NodeJSLogo}
                    height='auto'
                    width='70%'
                    alt='node.js logo'
                  />
                  <img
                    className='tech-avatar'
                    src={ExpressLogo}
                    height='auto'
                    width='70%'
                    alt='express.js logo'
                  />
                  <img
                    className='tech-avatar'
                    src={MySQLLogo}
                    height='auto'
                    width='70%'
                    alt='mysql logo'
                  />
                  <img
                    className='tech-avatar'
                    src={MongoDBLogo}
                    height='auto'
                    width='70%'
                    alt='mongodb logo'
                  />
                  <img
                    className='tech-avatar'
                    src={MERNLogo}
                    height='auto'
                    width='70%'
                    alt='mern logo'
                  />
                  <img
                    className='tech-avatar'
                    src={ReactLogo}
                    height='auto'
                    width='70%'
                    alt='react logo'
                  />
                  <img
                    className='tech-avatar'
                    src={GraphQL}
                    height='auto'
                    width='70%'
                    alt='graphql logo'
                  />
                  <img
                    className='tech-avatar'
                    src={Socketio}
                    height='auto'
                    width='70%'
                    alt='socket.io logo'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
