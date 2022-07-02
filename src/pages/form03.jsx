import React, { useState } from 'react';
import {
  Container,
  Box,
  FormControl,
  FormLabel,
  SimpleGrid,
  Button,
  Select,
  RadioGroup,
  Stack,
  Radio,
} from '@chakra-ui/react';
import {
  ArrowForwardIcon,
  ArrowDownIcon,
  ArrowBackIcon,
} from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import data from '../data/movies';

const Form03 = () => {
  const [loadingStatus, setLoadingStatus] = useState(false);
  const [value, setValue] = useState(1);
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
              <FormLabel htmlFor='maritalStatus'>Marital Status</FormLabel>
              <RadioGroup onChange={setValue} value={value}>
                <Stack direction='row'>
                  <Radio value='1'>Married</Radio>
                  <Radio value='2'>Unmarried</Radio>
                  <Radio value='3'>Rather Not to Say</Radio>
                </Stack>
              </RadioGroup>
            </FormControl>
          </Box>
          <Box>
            <FormControl>
              <FormLabel htmlFor='movie'>Movie Viewed</FormLabel>
              <Select id='movie' icon={<ArrowDownIcon />}>
                {data.movies.map((movie, id) => (
                  <option value={movie.title} key={id}>
                    {movie.title}
                  </option>
                ))}
              </Select>
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

export default Form03;
