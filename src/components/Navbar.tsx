import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Spacer,
} from '@chakra-ui/react';
import { signIn, signOut, useSession } from 'next-auth/react';
import React from 'react';

const Navbar = () => {
  const session = useSession();

  if (session.status === 'loading') return null;

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
    >
      <Box>
        <Heading size="md">Guestbook</Heading>
      </Box>
      <Spacer />
      {!session.data && (
        <ButtonGroup gap="2">
          <Button bg="whiteAlpha.100">Sign Up</Button>
          <Button onClick={() => signIn('discord')} bg="whiteAlpha.100">
            Log in
          </Button>
        </ButtonGroup>
      )}
      {session.data && (
        <ButtonGroup gap="2">
          <Button onClick={() => signOut()} bg="whiteAlpha.100">
            Sign Out
          </Button>
        </ButtonGroup>
      )}
    </Flex>
  );
};

export default Navbar;
