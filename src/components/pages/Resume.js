import React from 'react';
import pdf from '../pdf/Michael_Melanson_Resume.pdf';

export default function Resume() {
  return (
    <div className='container'>
      <iframe title='resume' src={pdf} />
    </div>
  );
}
