import React from 'react';
import {
  Button,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import ModalComponent from './modal';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <div
        style={{
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
      {/* <Form01 /> */}
      {/**
       * Modal
       * To Avoid Props, I'm keeping it here
       * To use Redux, I've nested all other component into another componetn file
       */}
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered={true}
        onOverlayClick={() => onClose()}
        onEsc={() => onClose()}
        size='lg'
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Your Information</ModalHeader>
          <ModalCloseButton />
          <ModalComponent />

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button colorScheme='green'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Header;
