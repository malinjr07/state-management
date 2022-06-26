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
  InputRightElement,
  SimpleGrid,
  Button,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';

const Form01 = () => {
  const [show, setShow] = useState(false);
  const [loadingStatus, setLoadingStatus] = useState(false);
  const handleClick = () => setShow(!show);
  /**
   * Junk Code
   * All the routes A.K.A conditional rendering will be happened using React-Redux
   */

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoadingStatus(true);
    setTimeout(() => {
      navigate('/form-02');
      setLoadingStatus(false);
    }, 1500);
  };

  return (
    <form method='post' onSubmit={handleSubmit}>
      <Container maxW='1366px'>
        <SimpleGrid columns={2} spacing={10}>
          <Box>
            <FormControl>
              <FormLabel htmlFor='email'>Email address</FormLabel>
              <Input
                variant='flushed'
                name='emailData'
                id='email'
                type='email'
              />
              <FormHelperText>
                There is no Database connected. clear your browser cache to
                clear data.
              </FormHelperText>
            </FormControl>
          </Box>
          <Box>
            <FormControl>
              <FormLabel htmlFor='email'>Phone Number</FormLabel>
              <InputGroup>
                <InputLeftAddon children='+880' />
                <Input type='tel' placeholder='phone number' />
              </InputGroup>
              <FormHelperText>
                There is no Database connected. clear your browser cache to
                clear data.
              </FormHelperText>
            </FormControl>
          </Box>
          <Box>
            <FormControl>
              <FormLabel htmlFor='password'>Password</FormLabel>
              <InputGroup size='md'>
                <Input
                  pr='4.5rem'
                  type={show ? 'text' : 'password'}
                  placeholder='Enter password'
                  id='password'
                  name='password'
                />
                <InputRightElement width='4.5rem'>
                  <Button h='1.75rem' size='sm' onClick={handleClick}>
                    {show ? 'Hide' : 'Show'}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <FormHelperText>
                There is no Database connected. clear your browser cache to
                clear data.
              </FormHelperText>
            </FormControl>
          </Box>
          <Box>
            <FormControl>
              <FormLabel htmlFor='rePassword'>Confirm Password</FormLabel>
              <InputGroup size='md'>
                <Input
                  pr='4.5rem'
                  type={show ? 'text' : 'password'}
                  placeholder='Repeat your password'
                  id='rePassword'
                  name='rePassword'
                />
                <InputRightElement width='4.5rem'>
                  <Button h='1.75rem' size='sm' onClick={handleClick}>
                    {show ? 'Hide' : 'Show'}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <FormHelperText>
                There is no Database connected. clear your browser cache to
                clear data.
              </FormHelperText>
            </FormControl>
          </Box>
        </SimpleGrid>
        <SimpleGrid
          columns={1}
          style={{ display: 'flex', justifyContent: 'flex-start' }}
        >
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

export default Form01;
