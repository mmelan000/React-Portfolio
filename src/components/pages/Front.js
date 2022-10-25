import React from 'react';
import Project from '../Project';
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
      <Card border='danger' className='text-center'>
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
              title='FindMyThrone'
              image={FindMyThrone}
              desc='Front-end application to allow users to find the nearest
              public bathroom and provide ratings. Designed as a tool to
              assist those who work on the road all day.'
              repo='https://github.com/mmelan000/FindMyThrone'
              deploy='https://mmelan000.github.io/FindMyThrone/'
            />
          </Carousel.Item>
          <Carousel.Item>
            <Project
              title='Weather Dashboard App'
              image={WeatherDashboard}
              desc='Front End application that uses third party APIs and local
              storage to provide up to date weather information.'
              repo='https://github.com/mmelan000/Weather-Dashboard-powered-by-API'
              deploy='https://mmelan000.github.io/Weather-Dashboard-powered-by-API/'
            />
          </Carousel.Item>
          <Carousel.Item>
            <Project
              title='Work Day Scheduler'
              image={WorkDayScheduler}
              desc="Front End application that uses local storage and CRUD
              operations to allow users to keep track of the day's events."
              repo='https://github.com/mmelan000/Work-Day-Planner'
              deploy='https://mmelan000.github.io/Work-Day-Planner/'
            />
          </Carousel.Item>
          <Carousel.Item>
            <Project
              title='Coding Quiz App'
              image={CodingQuiz}
              desc='Front End application that allows users to test their
              knowledge about JavaScript using a third party API and local
              storage.'
              repo='https://github.com/mmelan000/Web-APIs-Code-Quiz'
              deploy='https://mmelan000.github.io/Web-APIs-Code-Quiz/'
            />
          </Carousel.Item>
          <Carousel.Item>
            <Project
              title='Password Generator'
              image={PasswordGen}
              desc='Front End application to generate an acceptable random
              password based on user criteria.'
              repo='https://github.com/mmelan000/Javascript-Password-Generator'
              deploy='https://mmelan000.github.io/Javascript-Password-Generator/'
            />
          </Carousel.Item>
        </Carousel>
      </Card>
    </Container>
  );
};

export default Front;
