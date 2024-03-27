// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreetings } from '../redux/greetingSlice';

const Greeting = () => {
  const dispatch = useDispatch();
  const greetingData = useSelector((state) => state?.greetings?.value);
  const greeting = greetingData ? greetingData.greeting : '';

  useEffect(() => {
    dispatch(fetchGreetings())
      .catch(error => console.error('Error fetching greetings:', error));
  }, [dispatch]);

  if (!greetingData) {
    return <p>Loading...</p>;
  }

  console.log('greetingData:', greetingData);

  return (
    <div className='container'>
      <h1>Random greeting will be generated on refresh</h1>
      <p className='greeting-div'>{greeting}</p>
    </div>
  );
};

export default Greeting;
