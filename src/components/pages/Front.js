import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Front = () => {
  return (
    <Container>
      <br />
      <Card border='danger'>
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
              <Card.Img variant='top' src='./images/my-1st-group-project.jpg' />
              <Card.Body>
                <Card.Title>FindMyThrone</Card.Title>
                <hr />
                <Card.Text>
                  Front-end application to allow users to find the nearest
                  public bathroom and provide ratings. Designed as a tool to
                  assist those who work on the road all day.
                </Card.Text>
                <div className='d-grid gap-2'>
                  <Button
                    variant='success'
                    href='https://mmelan000.github.io/FindMyThrone/'
                    target='_blank'
                  >
                    Deployed Application
                  </Button>
                  <Button
                    variant='success'
                    href='https://github.com/mmelan000/FindMyThrone'
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
              <Card.Img variant='top' src='./images/my-3rd-project.jpg' />
              <Card.Body>
                <Card.Title>Random Password Generator</Card.Title>
                <hr />
                <Card.Text>
                  Front End application to generate an acceptable random
                  password based on user criteria to help with cybersecurity
                  issues.
                </Card.Text>
                <div className='d-grid gap-2'>
                  <Button
                    variant='success'
                    href='https://mmelan000.github.io/Javascript-Password-Generator/'
                    target='_blank'
                  >
                    Deployed Application
                  </Button>
                  <Button
                    variant='success'
                    href='https://github.com/mmelan000/Javascript-Password-Generator'
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
              <Card.Img variant='top' src='./images/my-3rd-project.jpg' />
              <Card.Body>
                <Card.Title>Random Password Generator</Card.Title>
                <hr />
                <Card.Text>
                  Front End application to generate an acceptable random
                  password based on user criteria to help with cybersecurity
                  issues.
                </Card.Text>
                <div className='d-grid gap-2'>
                  <Button
                    variant='success'
                    href='https://mmelan000.github.io/Javascript-Password-Generator/'
                    target='_blank'
                  >
                    Deployed Application
                  </Button>
                  <Button
                    variant='success'
                    href='https://github.com/mmelan000/Javascript-Password-Generator'
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
              <Card.Img variant='top' src='./images/my-3rd-project.jpg' />
              <Card.Body>
                <Card.Title>Random Password Generator</Card.Title>
                <hr />
                <Card.Text>
                  Front End application to generate an acceptable random
                  password based on user criteria to help with cybersecurity
                  issues.
                </Card.Text>
                <div className='d-grid gap-2'>
                  <Button
                    variant='success'
                    href='https://mmelan000.github.io/Javascript-Password-Generator/'
                    target='_blank'
                  >
                    Deployed Application
                  </Button>
                  <Button
                    variant='success'
                    href='https://github.com/mmelan000/Javascript-Password-Generator'
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

export default Front;