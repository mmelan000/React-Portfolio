import React from 'react';
import Project from '../Project';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import FindAFriend from '../images/my-2nd-group-project.jpg';
import TechBlog from '../images/my-12th-project.jpg';
import NoteTaker from '../images/my-9th-project.jpg';

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
              title='Find a Friend'
              image={FindAFriend}
              desc='Full Stack application to allow users to connect with others
                  users, and create or join events.'
              repo='https://github.com/mmelan000/Find-A-Friend'
              deploy='https://fathomless-gorge-22203.herokuapp.com/'
            />
          </Carousel.Item>
          <Carousel.Item>
            <Project
              title='Tech Blog'
              image={TechBlog}
              desc='Full Stack application to provide a message board, complete
            with CRUD operations and authorization.'
              repo='https://github.com/mmelan000/SHINRA-Tech-Blog'
              deploy='https://secure-hollows-02949.herokuapp.com/'
            />
          </Carousel.Item>
          <Carousel.Item>
            <Project
              title='Note Taker'
              image={NoteTaker}
              desc='Front and back end application that utilizes local storage to allow
              users to perform CRUD operations on notes.'
              repo='https://github.com/mmelan000/Note-Taker-powered-by-Express'
              deploy='https://notetaker-powered-by-expressjs.herokuapp.com/'
            />
          </Carousel.Item>
        </Carousel>
      </Card>
    </Container>
  );
};

export default Full;
