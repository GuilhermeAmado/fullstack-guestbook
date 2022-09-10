import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  Heading,
  Spacer,
  Spinner,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React from 'react';
import AuthModal from './AuthModal';

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  const session = useSession();

  return (
    <>
      <AuthModal isOpen={isOpen} onClose={onClose} />
      <Flex
        as="header"
        padding="5"
        marginBottom="8"
        minWidth="max-content"
        alignItems="center"
        gap="2"
        backgroundColor="blackAlpha.400"
        boxShadow="md"
        minHeight="80px"
      >
        <Container as={Flex} maxWidth="1200px" alignItems="center">
          <Box onClick={() => router.push('/')} cursor="pointer">
            <Heading size="md">Guestbook</Heading>
          </Box>
          <Spacer />
          {session.status === 'loading' && <Spinner />}
          {session.status !== 'loading' && !session.data && (
            <ButtonGroup gap="2">
              <Button bg="whiteAlpha.100" onClick={() => router.push('/enter')}>
                Anonymous Login
              </Button>
              <Button onClick={onOpen} bg="whiteAlpha.100">
                Social Login
              </Button>
            </ButtonGroup>
          )}
          {session.data && (
            <ButtonGroup gap="2">
              <Flex
                alignItems="center"
                gap="8px"
                cursor="pointer"
                onClick={() => router.push('/my-posts')}
              >
                <Avatar size="sm" src={session.data.user?.image ?? ''}></Avatar>
                <Text>
                  {session.data.user?.username || session.data.user?.name}
                </Text>
              </Flex>

              <Button
                variant="solid"
                colorScheme="blue"
                onClick={() => router.push('/my-posts')}
              >
                New Post
              </Button>
              <Button onClick={() => signOut()} bg="whiteAlpha.100">
                Sign Out
              </Button>
            </ButtonGroup>
          )}
        </Container>
      </Flex>
    </>
  );
};

export default Navbar;
