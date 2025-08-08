import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CoffeeDetailsCard from '../components/CoffeeDetailsCard';

const CoffeeDetails = () => {
  return (
    <div>
      <Navbar></Navbar>
      <CoffeeDetailsCard></CoffeeDetailsCard>
      <Footer></Footer>
    </div>
  );
};

export default CoffeeDetails;