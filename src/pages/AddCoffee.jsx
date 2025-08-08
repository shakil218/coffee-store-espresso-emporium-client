import React from 'react';
import Navbar from '../components/Navbar';
import AddCoffeeForm from '../components/AddCoffeeForm';
import Footer from '../components/Footer';

const AddCoffee = () => {
  return (
    <div >
      <Navbar></Navbar>
      <AddCoffeeForm></AddCoffeeForm>
      <Footer></Footer>
    </div>
  );
};

export default AddCoffee;