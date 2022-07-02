import { Button } from '@chakra-ui/react';
import React from 'react';

const Complete = () => {
  return (
    <div>
      It's done for now! Please click{' '}
      <Button
        type='submit'
        style={{ width: '15%', margin: '20px auto' }}
        colorScheme='teal'
        variant='outline'
      >
        Here
      </Button>
      to check the data
    </div>
  );
};

export default Complete;
