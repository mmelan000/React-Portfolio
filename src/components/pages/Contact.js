import React, { useState } from 'react';
import { Card, Form, Container, Row, Button } from 'react-bootstrap';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const isValidEmail = (email) => {
    const regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    return regex.test(String(email).toLowerCase());
  };

  return (
    <Container>
      <br />
      <Row className='justify-content-around'>
        <Card className='col-sm-12 col-md-5' bg='dark' text='white'>
          <Card.Body>
            <Card.Title>Looking to Contact Me?</Card.Title>
            <hr />
            <Card.Text>Phone: (267) 444-7162</Card.Text>
            <Card.Text>
              Email:{' '}
              <a href='mailto: m.melanson000@gmail.com'>
                m.melanson000@gmail.com
              </a>
            </Card.Text>
            <Card.Text>
              LinkedIn:
              <br />
              <a href='https://www.linkedin.com/in/michael-melanson-66130b237/'>
                https://www.linkedin.com/in/michael-melanson/
              </a>
            </Card.Text>
            <Card.Text>
              GitHub:{' '}
              <a href='https://github.com/mmelan000'>
                https://github.com/mmelan000
              </a>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className='col-sm-12 col-md-5' bg='dark' text='white'>
          <Card.Body>
            <Card.Title>Drop me a message!</Card.Title>
            <hr />
            <Form
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <label htmlFor='name'>Name</label>
              <br />
              <input
                type='text'
                id='name'
                name='name'
                placeholder='Your name..'
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                onMouseOut={() => {
                  if (!name) {
                    setError('Name is required');
                  } else {
                    setError('');
                  }
                }}
                className='contact_input col-12'
              />
              <br />
              <label htmlFor='email'>Email</label>
              <br />
              <input
                type='text'
                id='email'
                name='email'
                placeholder='Your email..'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onMouseOut={() => {
                  if (!email) {
                    setError('Email is required');
                    return;
                  }
                  if (!isValidEmail(email)) {
                    setError('Please enter a valid Email');
                    return;
                  } else {
                    setError('');
                  }
                }}
                className='contact_input col-12'
              />
              <br />
              <label htmlFor='message'>Message</label>
              <br />
              <textarea
                id='message'
                name='message'
                placeholder='Write something..'
                rows='10'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onMouseOut={() => {
                  if (!message) {
                    setError('Please enter a message');
                    return;
                  } else {
                    setError('');
                  }
                }}
                className='contact_input col-12'
              ></textarea>
              <br />
              <Button type='submit' variant='success'>
                Submit
              </Button>
              <p>{error}</p>
            </Form>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
};

export default Contact;
