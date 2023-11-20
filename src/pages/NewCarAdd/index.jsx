import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';

const AddCarContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 8px;
`;

const Button = styled.button`
  background-color: #3498db;
  color: #fff;
  padding: 10px;
  cursor: pointer;
`;

const AddNewCar = () => {
  const [formData, setFormData] = useState({
    model: '',
    picture: '',
    blurb: '',
    engine: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://humoyun-website-backend.netlify.app/cars/addNew', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Car added successfully!');
        toast.success('Car added successfully!', {
          position: toast.POSITION.TOP_RIGHT,
        });

        // Reset the form after successful submission
        setFormData({
          model: '',
          picture: '',
          blurb: '',
          engine: '',
        });
      } else {
        console.error('Failed to add car. Server returned:', response.status, response.statusText);
        toast.error('Failed to add car. Please try again later.', {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    } catch (error) {
      console.error('Error while adding car:', error.message);
      toast.error('Error while adding car. Please try again later.', {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  return (
    <AddCarContainer>
      <h2>Add New Car</h2>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Model"
          value={formData.model}
          onChange={(e) => setFormData({ ...formData, model: e.target.value })}
        />
        <Input
          type="text"
          placeholder="Picture URL"
          value={formData.picture}
          onChange={(e) => setFormData({ ...formData, picture: e.target.value })}
        />
        <Input
          type="text"
          placeholder="Blurb"
          value={formData.blurb}
          onChange={(e) => setFormData({ ...formData, blurb: e.target.value })}
        />
        <Input
          type="text"
          placeholder="Engine"
          value={formData.engine}
          onChange={(e) => setFormData({ ...formData, engine: e.target.value })}
        />
        <Button type="submit">Add Car</Button>
      </Form>
      <ToastContainer />
    </AddCarContainer>
  );
};

export default AddNewCar;
