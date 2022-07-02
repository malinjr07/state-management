import React from 'react';
import {
  Divider,
  ModalBody,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';

const ModalComponent = () => {
  return (
    <ModalBody style={{ overflowY: 'scroll' }}>
      Just to inform you, these tasks can be easily handled by{' '}
      <strong>Context-API</strong> and <strong>LocalStorage</strong>. Both of
      these are pre-built functions of React.js;
      <br /> Check out this website: <br />
      <a
        href='/'
        target='_blank'
        style={{ textDecoration: 'underline', color: 'blue' }}
      >
        Multi-Step-Form using Context-API
      </a>
      <div style={{ margin: '15px 0' }}>
        <Divider />
      </div>
      <TableContainer>
        <Table variant='striped' colorScheme='teal'>
          <Thead>
            <Tr>
              <Th>Key</Th>
              <Th>Value</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Current Form Step</Td>
              <Td>05</Td>
            </Tr>
            <Tr>
              <Td>feet</Td>
              <Td>centimetres (cm)</Td>
            </Tr>
            <Tr>
              <Td>yards</Td>
              <Td>metres (m)</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </ModalBody>
  );
};

export default ModalComponent;
