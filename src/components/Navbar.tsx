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
} from '@chakra-ui/react';
import { signIn, signOut, useSession } from 'next-auth/react';
import React from 'react';

const Navbar = () => {
  const session = useSession();

  return (
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
        <Box>
          <Heading size="md">Guestbook</Heading>
        </Box>
        <Spacer />
        {session.status === 'loading' && <Spinner />}
        {session.status !== 'loading' && !session.data && (
          <ButtonGroup gap="2">
            <Button bg="whiteAlpha.100">Sign Up</Button>
            <Button onClick={() => signIn('discord')} bg="whiteAlpha.100">
              Log in
            </Button>
          </ButtonGroup>
        )}
        {session.data && (
          <ButtonGroup gap="2">
            <Flex alignItems="center" gap="8px">
              <Avatar size="sm" src={session.data.user?.image ?? ''}></Avatar>
              <Text>{session.data.user?.name}</Text>
            </Flex>
            <Button onClick={() => signOut()} bg="whiteAlpha.100">
              Sign Out
            </Button>
          </ButtonGroup>
        )}
      </Container>
    </Flex>
  );
};

export default Navbar;
