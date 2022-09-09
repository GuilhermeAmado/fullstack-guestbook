import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import Head from 'next/head';
import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';

const AnonymousPage = () => {
  const [value, setValue] = React.useState('');

  return (
    <>
      <Head>
        <title>Guestbook | Anonymous Login</title>
      </Head>
      <VStack align="flex-start" spacing="16px">
        <FormControl width="100%">
          <FormLabel>Choose your username:</FormLabel>
          <Input
            maxWidth="500px"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Enter your desired username to check availability"
            size="lg"
          />
        </FormControl>
        <Button
          rightIcon={<FiCheckCircle />}
          colorScheme="blue"
          variant="outline"
          marginTop="32px"
          size="lg"
          width="190px"
          isDisabled={true}
          // isLoading={true}
          spinnerPlacement="end"
          loadingText="Checking availability"
          _loading={{
            fontSize: '12px',
          }}
        >
          Choose
        </Button>
      </VStack>
    </>
  );
};

export default AnonymousPage;
