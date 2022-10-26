import React from 'react';
import pdf from '../pdf/michael_melanson_resume.pdf';

export default function Resume() {
  return (
    <div className='container'>
      <iframe title='resume' src={pdf} />
    </div>
  );
}
