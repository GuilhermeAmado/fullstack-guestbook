import { Box, Flex, HStack, Icon, Text } from '@chakra-ui/react';
import React from 'react';
import { FiHeart } from 'react-icons/fi';

const PostCard = () => {
  return (
    <Flex
      width="100%"
      flexDirection="column"
      alignItems="flex-start"
      gap="16px"
      padding="24px 36px"
      border="1px solid"
      bg="hsl(250, 24%, 9%)"
      borderColor="hsl(270, 45%, 24%);"
      borderRadius="md"
      boxShadow="rgb(132 59 206 / 15%) 0px 4px 24px"
    >
      <Text
        padding="4px 8px"
        fontSize="12px"
        fontWeight="700"
        bg="white"
        color="purple.900"
        borderRadius="md"
      >
        @guilhermeamado
      </Text>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni placeat
        inventore architecto aliquam aspernatur quo. At voluptatem laborum minus
        vitae dicta et dolorum, recusandae, dolor obcaecati, similique illo
        soluta ratione sapiente. Ducimus, accusamus eaque deleniti cum aut
        laboriosam odio ea dolores quas, minus quam beatae.
      </Text>
      <HStack alignSelf="flex-end">
        <Icon as={FiHeart} />
        <Text
          fontSize="12px"
          fontWeight="600"
          minWidth="30px"
          textAlign="right"
        >
          43
        </Text>
      </HStack>
    </Flex>
  );
};

export default PostCard;
