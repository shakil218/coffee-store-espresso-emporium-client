import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import UpdateCoffeeForm from '../components/UpdateCoffeeForm';

const UpdateCoffee = () => {
  return (
    <div>
      <Navbar></Navbar>
      <UpdateCoffeeForm></UpdateCoffeeForm>
      <Footer></Footer>
    </div>
  );
};

export default UpdateCoffee;