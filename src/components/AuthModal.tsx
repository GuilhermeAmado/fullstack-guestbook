import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  VStack,
} from '@chakra-ui/react';
import { signIn } from 'next-auth/react';
import React from 'react';
import { FaDiscord, FaGithub } from 'react-icons/fa';

type AuthModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const AuthModal = ({ isOpen, onClose }: AuthModalProps) => {
  return (
    <Modal onClose={onClose} isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Social Login</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack align="stretch" spacing="16px">
            <Button
              variant="solid"
              colorScheme="discord"
              onClick={() => signIn('discord')}
              leftIcon={<FaDiscord />}
            >
              Login with Discord
            </Button>
            <Button
              variant="solid"
              colorScheme="blackAlpha"
              bg="black"
              color="white"
              _hover={{
                bg: 'blackAlpha.700',
              }}
              onClick={() => signIn('github')}
              leftIcon={<FaGithub />}
            >
              Login with GitHub
            </Button>
          </VStack>
        </ModalBody>
        <ModalFooter />
      </ModalContent>
    </Modal>
  );
};

export default AuthModal;
