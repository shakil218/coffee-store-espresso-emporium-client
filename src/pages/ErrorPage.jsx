import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Error from '../components/Error';

const ErrorPage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Error></Error>
      <Footer></Footer>
    </div>
  );
};

export default ErrorPage;