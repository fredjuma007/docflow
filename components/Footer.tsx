import React from 'react';

const Footer = () => {
  return (
<footer className='footer-container bg-dark-500 text-center p-4 mt-8'>
  <div className='flex justify-center space-x-2'>
    <p className='text-sm text-blue-100'>
      &copy; {new Date().getFullYear()} DocFlow. Developed by <span className='font-bold'>Fred Juma</span>
    </p>
    <p className='text-sm text-blue-100'>
      | Check out more projects from my <a href='https://jumaportfolio.netlify.app/' 
      className='text-blue-400 font-bold' 
      target='_blank' 
      rel='noopener noreferrer'>
        PORTFOLIO
        </a>
    </p>
  </div>
</footer>

  );
};

export default Footer;
