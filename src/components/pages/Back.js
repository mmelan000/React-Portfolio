import React from 'react';
import Project from '../Project';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import SocialNetwork from '../images/my-13th-project.jpg';
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
            <Project
              title='Social Network API'
              image={SocialNetwork}
              desc='Back-end RESTful API to allow for CRUD operations to support a
              Social Network.'
              repo='https://github.com/mmelan000/Social-Network-API'
              video='tbd'
              techs='Express.js, JavaScript, MongoDB, Mongoose, Node.js'
            />
          </Carousel.Item>
          <Carousel.Item>
            <Project
              title='E-Commerce API Backend'
              image={Ecommerce}
              desc='Back End application to allow client to utilize CRUD
              operations for MySQL inventory database.'
              repo='https://github.com/mmelan000/E-Commerce-API-Backend'
              video='https://drive.google.com/file/d/1sBtApEYqutYOUci_sTvA7tTQqx3U7XHC/view'
              techs='dotenv, Express.js, JavaScript, Node.js, MySQL, MySQL2, Sequalize.js'
            />
          </Carousel.Item>
          <Carousel.Item>
            <Project
              title='Employee Database Manager'
              image={EmployeeManager}
              desc='Node.js and MySQL application that allows user to manage CRUD
              operations on an Human Resources database.'
              repo='https://github.com/mmelan000/Employee-Database-Manager'
              video='https://drive.google.com/file/d/1bmcOn1soIZEP6wXATo3wsAhYo2cORi4V/view'
              techs='console.table, dotenv, Inquirer.js, JavaScript, MySQL, MySQL2, Node.js, Sequalize.js'
            />
          </Carousel.Item>
          <Carousel.Item>
            <Project
              title='Employee Dashboard Generator'
              image={EmployeeDashboard}
              desc='Node.js application that allows employers to generate HTML/CSS
              dashboards for employees.'
              repo='https://github.com/mmelan000/Employee-Dashboard-Generator'
              video='https://drive.google.com/file/d/1QaviwklVCTNazefBhnmVNIgdwy2Qhaf4/view'
              deploy='https://mmelan000.github.io/Employee-Dashboard-Generator/'
              techs='Bootstrap, HTML5, Inquirer.js, JavaScript, Jest, Node.js'
            />
          </Carousel.Item>
          <Carousel.Item>
            <Project
              title='README Generator'
              image={README}
              desc='Node.js application that allows user to enter information and
              receive back a properly formatted README.md file.'
              repo='https://github.com/mmelan000/I-Hate-Doing-READMEs'
              video='https://drive.google.com/file/d/16kG3nYP8nuznHHM4zX5IJNo8nJDFk0n6/view'
              techs='Inquirer.js, JavaScript, Node.js'
            />
          </Carousel.Item>
        </Carousel>
      </Card>
    </Container>
  );
};

export default Back;
