import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import Head from 'next/head';
import React, { useState } from 'react';
import { FiCheckCircle } from 'react-icons/fi';
import useDebounce from '../hooks/useDebounce';
import { trpc } from '../utils/trpc';

const AnonymousPage = () => {
  const [value, setValue] = useState('');

  const { debouncedValue, isDebouncing } = useDebounce(value, 1000);

  const { data, isLoading, isFetching } = trpc.useQuery(
    ['users.checkUsernameAvailability', { username: debouncedValue }],
    {
      enabled: !!debouncedValue && debouncedValue.length >= 3,
    }
  );

  return (
    <>
      <Head>
        <title>Guestbook | Enter</title>
      </Head>
      <VStack align="flex-start" spacing="16px">
        <FormControl width="100%" isInvalid={data && !data.isAvailable}>
          <FormLabel>Choose your username:</FormLabel>
          <Input
            id="guestbook-username"
            type="text"
            autoComplete="off"
            maxWidth="500px"
            value={value}
            maxLength={30}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Enter your desired username to check availability"
            size="lg"
          />
        </FormControl>
        <Flex width="500px" justifyContent="space-between">
          <Button
            rightIcon={<FiCheckCircle />}
            colorScheme="blue"
            variant="outline"
            size="lg"
            width="190px"
            isDisabled={!data?.isAvailable || isDebouncing}
            isLoading={isLoading || isFetching}
            spinnerPlacement="end"
            loadingText="Checking availability"
            _loading={{
              fontSize: '12px',
            }}
          >
            Choose
          </Button>
          {data && !data.isAvailable && (
            <Text color="red.700">username already taken</Text>
          )}
        </Flex>
      </VStack>
    </>
  );
};

export default AnonymousPage;
