import React from 'react';
import Project from '../Project';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import FindAFriend from '../images/my-2nd-group-project.jpg';
import TechBlog from '../images/my-12th-project.jpg';
import NoteTaker from '../images/my-9th-project.jpg';
import ArrayTheGame from '../images/array-the-game.png';

const Full = () => {
  return (
    <Container>
      <br />
      <Card border='success' className='text-center'>
        <Carousel
          variant='dark'
          interval={9000}
          nextIcon={
            <span
              aria-hidden='true'
              className='carousel-control-next-icon'
              id='my-carousel-right'
            />
          }
          prevIcon={
            <span
              aria-hidden='true'
              className='carousel-control-prev-icon'
              id='my-carousel-left'
            />
          }
        >
          <Carousel.Item>
            <Project
              title='Array the Game'
              image={ArrayTheGame}
              desc='A passion project with friends I made during bootcamp the pushed the limits of what we thought we were capable of. A site that features a game, lobbies, in-game chat, and forums for a community.'
              jargon='A MERN stack application that allows users to play a game with their friends.'
              repo='https://github.com/mmelan000/Array-the-Game'
              deploy='https://array-the-game-production.up.railway.app/'
              techs='Apollo, bcrypt, Bootstrap, CSS3, dotenv, Express.js, GraphQL, HTML5, JavaScript, JWT, LottieFiles, MongoDB, Node.js, react-boostrap, socket.io, uuid'
            />
          </Carousel.Item>
          <Carousel.Item>
            <Project
              title='Find a Friend'
              image={FindAFriend}
              desc='A website designed to help facilite social activities among friends and strangers.'
              jargon='Full Stack application to allow users to connect with others
                  users, and create or join events.'
              repo='https://github.com/mmelan000/Find-A-Friend'
              deploy='https://fathomless-gorge-22203.herokuapp.com/'
              techs='bcrypt, Bootstrap, connect-session-sequalize, CSS3, dotenv, Express.js, express-handlebars, express-session, Handlebars.js, HTML5, JavaScript, md5, MySQL, MySQL2, Node.js, Sequalize.js'
            />
          </Carousel.Item>
          <Carousel.Item>
            <Project
              title='Tech Blog'
              image={TechBlog}
              desc='A forum for users to make posts as well as view and comment on others posts.'
              jargon='Full Stack application to provide a message board, complete
            with CRUD operations and authorization.'
              repo='https://github.com/mmelan000/SHINRA-Tech-Blog'
              deploy='https://secure-hollows-02949.herokuapp.com/'
              techs='bcrypt, Bootstrap, connect-session-sequalize, dotenv, Express.js, express-handlebars, express-session, HTML5, JavaScript, MySQL, MySQL2, Node.js, Sequalize.js'
            />
          </Carousel.Item>
          <Carousel.Item>
            <Project
              title='Note Taker'
              image={NoteTaker}
              desc='An application that allows a user to store notes they need to keep.'
              jargon='Front and back end application that utilizes local storage to allow
              users to perform CRUD operations on notes.'
              repo='https://github.com/mmelan000/Note-Taker-powered-by-Express'
              deploy='https://notetaker-powered-by-expressjs.herokuapp.com/'
              techs='Bootstrap, CSS3, Express.js, HTML5, JavaScript, Node.js, uuid'
            />
          </Carousel.Item>
        </Carousel>
      </Card>
    </Container>
  );
};

export default Full;
