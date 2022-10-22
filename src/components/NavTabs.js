import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from './images/logo.png';

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <Navbar bg='dark' variant='dark' expand='lg'>
      <Container>
        <Navbar.Brand
          onClick={() => handlePageChange('Home')}
          className={currentPage === 'Home'}
          href='#home'
        >
          <img
            src={Logo}
            width='30'
            height='30'
            className='d-inline-block align-top'
            alt='html element mockup of letter m'
          />{' '}
          Michael Melanson
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link
              onClick={() => handlePageChange('Home')}
              className={currentPage === 'Home'}
              href='#home'
            >
              About
            </Nav.Link>
            <Nav.Link
              onClick={() => handlePageChange('Contact')}
              className={currentPage === 'Contact'}
              href='#contact'
            >
              Contact
            </Nav.Link>
            <Nav.Link
              onClick={() => handlePageChange('Resume')}
              className={currentPage === 'Resume'}
              href='#Resume'
            >
              Resume
            </Nav.Link>
            <NavDropdown
              title='Projects'
              menuVariant='dark'
              id='basic-nav-dropdown'
            >
              <NavDropdown.Item
                onClick={() => handlePageChange('Front')}
                className={currentPage === 'Front'}
                href='#Front'
              >
                Front-end Applications
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => handlePageChange('Back')}
                className={currentPage === 'Back'}
                href='#Back'
              >
                Back-end Applications
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => handlePageChange('Full')}
                className={currentPage === 'Full'}
                href='#Full'
              >
                Full Stack Applications
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavTabs;
