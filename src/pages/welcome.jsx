import React from 'react';
import { Outlet } from 'react-router-dom';

const Welcome = () => {
  return (
    <div style={{ marginTop: '10px' }}>
      <Outlet />
    </div>
  );
};

export default Welcome;
