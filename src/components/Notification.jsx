import React from 'react';

function Notification() {
  return (
    <div className="h-8">
      <div className="animate-marquee">
        <span className="font-bold uppercase sm:text-xl text-xs">
          Admission are open, contact us for more details.{' '}
        </span>
      </div>
      <div className='mt-4 flex flex-col items-center'>
        <h1 className='sm:text-4xl text-3xl mb-5'>Session 2024-25</h1>
        <h1 className='sm:text-3xl text-2xl'>Nursery to Class 8</h1>
      </div>
    </div>
  );
}

export default Notification;
