import { Button, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import ModalComponent from './modal';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          width: '100%',
          height: '100px',
          background: 'blue',
          color: 'white',
          fontSize: '18px',
          fontWeight: 600,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        Youre Currently on Page 01 of 09
        <Button colorScheme='teal' size='lg' onClick={onOpen}>
          Show A glipse of your stored data
        </Button>
      </div>
      <ModalComponent open={isOpen} handleClose={onClose} />
    </>
  );
};

export default Header;
