import React from 'react';
import Box from '../../../components/box';
import Text from '../../../components/text';

export interface CardClassHeaderProps {
  courseName: string;
  author: string;
}

const CardClassHeader = ({data}: {data: CardClassHeaderProps}) => {
  return (
    <Box
      width="100%"
      borderColor="accent"
      borderRadius={10}
      borderWidth={1}
      borderStyle="dashed"
      mt="xl"
      mb="m"
      p="m">
      <Text mb="s" variant="headerTitle" color="accent">
        {data.courseName}
      </Text>
      <Text variant="bold" color="text">
        Instrutor: <Text variant="regular">{data.author}</Text>
      </Text>
    </Box>
  );
};
export default CardClassHeader;
