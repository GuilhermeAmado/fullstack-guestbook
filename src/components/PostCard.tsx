import { Box, Flex, Heading, HStack, Icon, Text } from '@chakra-ui/react';
import React from 'react';
import { FiHeart } from 'react-icons/fi';

type PostCardProps = {
  authorUsername: string | null;
  postTitle: string;
  postContent: string;
};

const PostCard = ({
  authorUsername,
  postTitle,
  postContent,
}: PostCardProps) => {
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
        {`@${authorUsername}`}
      </Text>
      <Heading fontSize="md">{postTitle}</Heading>
      <Text>{postContent}</Text>
      <HStack
        alignSelf="flex-end"
        bg="whiteAlpha.200"
        borderRadius="md"
        padding="4px 8px"
      >
        <Icon as={FiHeart} />
        <Text fontSize="12px" fontWeight="600">
          43
        </Text>
      </HStack>
    </Flex>
  );
};

export default PostCard;
