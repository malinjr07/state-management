import React, { useState } from 'react';
import {
  Container,
  Box,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  SimpleGrid,
  Button,
  Select,
} from '@chakra-ui/react';
import {
  ArrowForwardIcon,
  ArrowDownIcon,
  ArrowBackIcon,
} from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';

const Form02 = () => {
  const [loadingStatus, setLoadingStatus] = useState(false);
  /**
   * Junk Code
   * All the routes A.K.A conditional rendering will be happened using React-Redux
   */

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoadingStatus(true);
    setTimeout(() => {
      navigate('/form-03');
      setLoadingStatus(false);
    }, 1500);
  };

  return (
    <form method='post' onSubmit={handleSubmit}>
      <Container maxW='1366px'>
        <SimpleGrid columns={2} spacing={10}>
          <Box>
            <FormControl>
              <FormLabel htmlFor='fname'>First Name</FormLabel>
              <Input
                variant='flushed'
                name='firstName'
                id='fname'
                type='text'
              />
              <FormHelperText>
                There is no Database connected. clear your browser cache to
                clear data.
              </FormHelperText>
            </FormControl>
          </Box>
          <Box>
            <FormControl>
              <FormLabel htmlFor='lname'>Last Name</FormLabel>
              <Input variant='flushed' name='lname' id='lname' type='text' />
              <FormHelperText>
                There is no Database connected. clear your browser cache to
                clear data.
              </FormHelperText>
            </FormControl>
          </Box>
          <Box>
            <FormControl>
              <FormLabel htmlFor='telephone'>Phone Number</FormLabel>
              <InputGroup>
                <InputLeftAddon children='+880' />
                <Input
                  type='tel'
                  id='telephone'
                  name='tel'
                  placeholder='phone number'
                />
              </InputGroup>
              <FormHelperText>
                There is no Database connected. clear your browser cache to
                clear data.
              </FormHelperText>
            </FormControl>
          </Box>
          <Box>
            <FormControl>
              <FormLabel htmlFor='location'>Location</FormLabel>
              <Select icon={<ArrowDownIcon />}>
                <option value='option1'>Option 1</option>
                <option value='option2'>Option 2</option>
                <option value='option3'>Option 3</option>
              </Select>
              <FormHelperText>
                There is no Database connected. clear your browser cache to
                clear data.
              </FormHelperText>
            </FormControl>
          </Box>
        </SimpleGrid>
        <SimpleGrid
          columns={1}
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            marginTop: '35px',
          }}
        >
          <Button
            isLoading={loadingStatus}
            type='submit'
            style={{ width: '15%', margin: '20px auto' }}
            leftIcon={<ArrowBackIcon />}
            colorScheme='teal'
            variant='outline'
          >
            Previous
          </Button>
          <Button
            isLoading={loadingStatus}
            type='submit'
            style={{ width: '15%', margin: '20px auto' }}
            rightIcon={<ArrowForwardIcon />}
            colorScheme='teal'
            variant='outline'
          >
            Next
          </Button>
        </SimpleGrid>
      </Container>
    </form>
  );
};

export default Form02;
