import {
  Button,
  Code,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Icon,
  Input,
  Text,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import Head from 'next/head';
import React, { useRef, useState } from 'react';
import useDebounce from '../hooks/useDebounce';
import { slugify } from '../lib/slugFactory';
import { trpc } from '../utils/trpc';
import { BsArrowRightSquareFill } from 'react-icons/bs';

const AnonymousPage = () => {
  const [postTitle, setPostTitle] = useState('');
  const createPost = trpc.useMutation(['posts.createPost']);

  const textAreaRef = useRef<HTMLTextAreaElement>(null);

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
            value={postTitle}
            maxLength={30}
            onChange={(e) => setPostTitle(e.target.value)}
            placeholder="My awesome title"
            size="lg"
          />
        </FormControl>

        <HStack minHeight="18px">
          <Text
            fontWeight="700"
            fontSize="14px"
            color="whiteAlpha.800"
            variant="ghost"
          >
            Slug
          </Text>
          <Icon as={BsArrowRightSquareFill} />
          <Code>{slugify(postTitle)}</Code>
        </HStack>

        <Textarea
          ref={textAreaRef}
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
                slug: slugify(postTitle),
                title: postTitle,
                content: textAreaRef.current?.value ?? '',
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
