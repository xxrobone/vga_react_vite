import React from 'react';
import './loader.scss';

export default function Loader() {
  return (
    <div className="loader_wrapper">
      <div className='loader'>
        <div className='mid'></div>
      </div>
      <p>Loading...</p>
    </div>
  );
}
