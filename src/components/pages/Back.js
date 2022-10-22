import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Ecommerce from '../images/my-11th-project.png';
import EmployeeManager from '../images/my-10th-project.jpg';
import EmployeeDashboard from '../images/my-8th-project.jpg';
import README from '../images/my-7th-project.jpg';

const Back = () => {
  return (
    <Container>
      <br />
      <Card border='warning' className='text-center'>
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
              <Card.Img variant='top' src={Ecommerce} />
              <Card.Body>
                <Card.Title>E-Commerce API Backend </Card.Title>
                <hr />
                <Card.Text>
                  Back End application to allow client to utilize CRUD
                  operations for MySQL inventory database
                </Card.Text>
                <div className='d-grid gap-2'>
                  <Button
                    variant='success'
                    href='https://drive.google.com/file/d/1sBtApEYqutYOUci_sTvA7tTQqx3U7XHC/view'
                    target='_blank'
                  >
                    Walkthrough Video
                  </Button>
                  <Button
                    variant='success'
                    href='https://github.com/mmelan000/E-Commerce-API-Backend'
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
              <Card.Img variant='top' src={EmployeeManager} />
              <Card.Body>
                <Card.Title>Employee Database Manager</Card.Title>
                <hr />
                <Card.Text>
                  Node.js and MySQL application that allows user to manage CRUD
                  operations on an Human Resources database.
                </Card.Text>
                <div className='d-grid gap-2'>
                  <Button
                    variant='success'
                    href='https://drive.google.com/file/d/1bmcOn1soIZEP6wXATo3wsAhYo2cORi4V/view'
                    target='_blank'
                  >
                    Walkthrough Video
                  </Button>
                  <Button
                    variant='success'
                    href='https://github.com/mmelan000/Employee-Database-Manager'
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
              <Card.Img variant='top' src={EmployeeDashboard} />
              <Card.Body>
                <Card.Title>Employee Dashboard Generator</Card.Title>
                <hr />
                <Card.Text>
                  Node.js application that allows employers to generate HTML/CSS
                  dashboards for employees.
                </Card.Text>
                <div className='d-grid gap-2'>
                  <Button
                    variant='success'
                    href='https://drive.google.com/file/d/1QaviwklVCTNazefBhnmVNIgdwy2Qhaf4/view'
                    target='_blank'
                  >
                    Walkthrough Video
                  </Button>
                  <Button
                    variant='success'
                    href='https://mmelan000.github.io/Employee-Dashboard-Generator/'
                    target='_blank'
                  >
                    Deployed Sample
                  </Button>
                  <Button
                    variant='success'
                    href='https://github.com/mmelan000/Employee-Dashboard-Generator'
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
              <Card.Img variant='top' src={README} />
              <Card.Body>
                <Card.Title>README Generator</Card.Title>
                <hr />
                <Card.Text>
                  Node.js application that allows user to enter information and
                  receive back a properly formatted README.md file.
                </Card.Text>
                <div className='d-grid gap-2'>
                  <Button
                    variant='success'
                    href='https://drive.google.com/file/d/16kG3nYP8nuznHHM4zX5IJNo8nJDFk0n6/view'
                    target='_blank'
                  >
                    Walkthrough Video
                  </Button>
                  <Button
                    variant='success'
                    href='https://github.com/mmelan000/I-Hate-Doing-READMEs'
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

export default Back;
