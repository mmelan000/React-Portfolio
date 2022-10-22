import React from 'react';
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
            <Card bg='dark' text='white'>
              <Card.Img variant='top' src={FindAFriend} />
              <Card.Body>
                <Card.Title>Find A Friend</Card.Title>
                <hr />
                <Card.Text>
                  Full Stack application to allow users to connect with others
                  users, and create or join events.
                </Card.Text>
                <div className='d-grid gap-2'>
                  <Button
                    variant='success'
                    href='https://fathomless-gorge-22203.herokuapp.com/'
                    target='_blank'
                  >
                    Deployed Application
                  </Button>
                  <Button
                    variant='success'
                    href='https://github.com/mmelan000/Find-A-Friend'
                    target='_blank'
                  >
                    Repository
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Carousel.Item>
          <Carousel.Item>
            <Card bg='dark' text='white'>
              <Card.Img variant='top' src={TechBlog} />
              <Card.Body>
                <Card.Title>Tech Blog</Card.Title>
                <hr />
                <Card.Text>
                  Full Stack application to provide a message board, complete
                  with CRUD operations and authorization.
                </Card.Text>
                <div className='d-grid gap-2'>
                  <Button
                    variant='success'
                    href='https://secure-hollows-02949.herokuapp.com/'
                    target='_blank'
                  >
                    Deployed Application
                  </Button>
                  <Button
                    variant='success'
                    href='https://github.com/mmelan000/SHINRA-Tech-Blog'
                    target='_blank'
                  >
                    Repository
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Carousel.Item>
          <Carousel.Item>
            <Card bg='dark' text='white'>
              <Card.Img variant='top' src={NoteTaker} />
              <Card.Body>
                <Card.Title>Note Taker</Card.Title>
                <hr />
                <Card.Text>
                  Front-end application that utilizes local storage to allow
                  users to perform CRUD operations on notes.
                </Card.Text>
                <div className='d-grid gap-2'>
                  <Button
                    variant='success'
                    href='https://notetaker-powered-by-expressjs.herokuapp.com/'
                    target='_blank'
                  >
                    Deployed Application
                  </Button>
                  <Button
                    variant='success'
                    href='https://github.com/mmelan000/Note-Taker-powered-by-Express'
                    target='_blank'
                  >
                    Repository
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Carousel.Item>
        </Carousel>
      </Card>
    </Container>
  );
};

export default Full;
