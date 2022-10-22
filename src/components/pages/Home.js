import React from 'react';

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
              <img
                className='avatar mt-lg-5'
                src='./images/avatar.png'
                alt='sans'
              />
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
                    src='./images/html5.png'
                    height='auto'
                    width='70%'
                  />
                  <img
                    className='tech-avatar'
                    src='./images/css3.png'
                    height='auto'
                    width='70%'
                  />
                  <img
                    className='tech-avatar'
                    src='./images/JS.png'
                    height='auto'
                    width='70%'
                  />
                  <img
                    className='tech-avatar'
                    src='./images/jQuery.png'
                    height='auto'
                    width='70%'
                  />
                  <img
                    className='tech-avatar'
                    src='./images/github-logo.png'
                    height='auto'
                    width='70%'
                  />
                  <img
                    className='tech-avatar'
                    src='./images/bootstrap.png'
                    height='auto'
                    width='70%'
                  />
                  <img
                    className='tech-avatar'
                    src='./images/npm.png'
                    height='auto'
                    width='70%'
                  />
                  <img
                    className='tech-avatar'
                    src='./images/nodeJS.png'
                    height='auto'
                    width='70%'
                  />
                  <img
                    className='tech-avatar'
                    src='./images/express.png'
                    height='auto'
                    width='70%'
                  />
                  <img
                    className='tech-avatar'
                    src='./images/MySQL.jpg'
                    height='auto'
                    width='70%'
                  />
                  <img
                    className='tech-avatar'
                    src='./images/mongodb.png'
                    height='auto'
                    width='70%'
                  />
                  <img
                    className='tech-avatar'
                    src='./images/mern.jpg'
                    height='auto'
                    width='70%'
                  />
                  <img
                    className='tech-avatar'
                    src='./images/React.png'
                    height='auto'
                    width='70%'
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
