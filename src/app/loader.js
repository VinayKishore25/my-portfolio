import Circles from '@/components/Circles';
import React from 'react';
import { InfinitySpin } from 'react-loader-spinner';

const Loader = () => {
  const loaderStyle = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      marginTop: '10px',
      color: '#555',
      fontSize: '16px',
    },
  };

  return (
      <div style={loaderStyle.container}>
      <Circles />
        <InfinitySpin
          visible={true}
          width="200"
          color="red"
          ariaLabel="infinity-spin-loading"
        />
        <p style={loaderStyle.text}>Loading...</p>
      </div>
  );
};

export default Loader;
