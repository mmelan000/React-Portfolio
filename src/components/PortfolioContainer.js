import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import Front from './pages/Front';
import Back from './pages/Back';
import Full from './pages/Full';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Front') {
      return <Front />;
    }
    if (currentPage === 'Back') {
      return <Back />;
    }
    if (currentPage === 'Full') {
      return <Full />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Home />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}
