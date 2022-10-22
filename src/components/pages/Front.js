import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import FindMyThrone from '../images/my-1st-group-project.jpg';
import WeatherDashboard from '../images/my-6th-project.jpg';
import WorkDayScheduler from '../images/my-5th-project.jpg';
import CodingQuiz from '../images/my-4th-project.jpg';
import PasswordGen from '../images/my-3rd-project.jpg';

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
              <Card.Img variant='top' src={FindMyThrone} />
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
              <Card.Img variant='top' src={WeatherDashboard} />
              <Card.Body>
                <Card.Title>Weather Dashboard App</Card.Title>
                <hr />
                <Card.Text>
                  Front End application that uses third party APIs and local
                  storage to provide up to date weather information.
                </Card.Text>
                <div className='d-grid gap-2'>
                  <Button
                    variant='success'
                    href='https://mmelan000.github.io/Weather-Dashboard-powered-by-API/'
                    target='_blank'
                  >
                    Deployed Application
                  </Button>
                  <Button
                    variant='success'
                    href='https://github.com/mmelan000/Weather-Dashboard-powered-by-API'
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
              <Card.Img variant='top' src={WorkDayScheduler} />
              <Card.Body>
                <Card.Title>Work Day Scheduler</Card.Title>
                <hr />
                <Card.Text>
                  Front End application that uses local storage and CRUD
                  operations to allow users to keep track of the day's events.
                </Card.Text>
                <div className='d-grid gap-2'>
                  <Button
                    variant='success'
                    href='https://mmelan000.github.io/Work-Day-Planner/'
                    target='_blank'
                  >
                    Deployed Application
                  </Button>
                  <Button
                    variant='success'
                    href='https://github.com/mmelan000/Work-Day-Planner'
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
              <Card.Img variant='top' src={CodingQuiz} />
              <Card.Body>
                <Card.Title>Coding Quiz App</Card.Title>
                <hr />
                <Card.Text>
                  Front End application that allows users to test their
                  knowledge about JavaScript using a third party API and local
                  storage.
                </Card.Text>
                <div className='d-grid gap-2'>
                  <Button
                    variant='success'
                    href='https://mmelan000.github.io/Web-APIs-Code-Quiz/'
                    target='_blank'
                  >
                    Deployed Application
                  </Button>
                  <Button
                    variant='success'
                    href='https://github.com/mmelan000/Web-APIs-Code-Quiz'
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
              <Card.Img variant='top' src={PasswordGen} />
              <Card.Body>
                <Card.Title>Password Generator</Card.Title>
                <hr />
                <Card.Text>
                  Front End application to generate an acceptable random
                  password based on user criteria.
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
