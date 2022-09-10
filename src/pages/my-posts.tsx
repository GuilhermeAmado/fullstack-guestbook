import {
  Box,
  Button,
  Code,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Icon,
  Input,
  Stack,
  Tag,
  Text,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import Head from 'next/head';
import React, { useState } from 'react';
import { FiCheckCircle } from 'react-icons/fi';
import useDebounce from '../hooks/useDebounce';
import { slugify } from '../lib/slugFactory';
import { trpc } from '../utils/trpc';
import { BsArrowRightSquareFill } from 'react-icons/bs';

const AnonymousPage = () => {
  const [value, setValue] = useState('');
  const createPost = trpc.useMutation(['posts.createPost']);

  return (
    <>
      <Head>
        <title>Guestbook | Compose</title>
      </Head>
      <VStack align="flex-start" spacing="16px">
        <FormControl width="100%" isInvalid={false}>
          <FormLabel fontSize="xl">Post title:</FormLabel>
          <Input
            id="guestbook-username"
            type="text"
            autoComplete="off"
            maxWidth="500px"
            value={value}
            maxLength={30}
            onChange={(e) => setValue(e.target.value)}
            placeholder="My awesome title"
            size="lg"
          />
        </FormControl>

        <HStack minHeight="18spx">
          <Text
            fontWeight="700"
            fontSize="14px"
            color="whiteAlpha.800"
            variant="ghost"
          >
            Slug
          </Text>
          <Icon as={BsArrowRightSquareFill} />
          <Code>{slugify(value)}</Code>
        </HStack>

        <Textarea
          height="300px"
          placeholder="What's on your mind? Start typing!"
        />

        <Flex width="500px" justifyContent="space-between">
          <Button
            colorScheme="blue"
            variant="outline"
            size="lg"
            width="190px"
            isLoading={false}
            spinnerPlacement="end"
            loadingText="Submiting..."
            _loading={{
              fontSize: '12px',
            }}
            onClick={() =>
              createPost.mutate({
                slug: 'test-post',
                content: 'this is the post content',
              })
            }
          >
            Submit Post
          </Button>
        </Flex>
      </VStack>
    </>
  );
};

export default AnonymousPage;
