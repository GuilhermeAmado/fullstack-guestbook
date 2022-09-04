import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Spacer,
} from '@chakra-ui/react';
import React from 'react';

const Navbar = () => {
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
      <ButtonGroup gap="2">
        <Button bg="whiteAlpha.100">Sign Up</Button>
        <Button bg="whiteAlpha.100">Log in</Button>
      </ButtonGroup>
    </Flex>
  );
};

export default Navbar;
