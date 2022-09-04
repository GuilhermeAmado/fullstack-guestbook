import { Container } from '@chakra-ui/react';
import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main>
        <Container maxWidth="90%">{children}</Container>
      </main>
    </>
  );
};

export default Layout;
