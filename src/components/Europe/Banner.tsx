import { Flex, Text } from '@chakra-ui/react';

export function Banner() {
  return (
    <Flex
      w="100%"
      h={["163px", "163px", "500px"]}
      px={["40"]}
      py={["20"]}
      align={["center", "center", "flex-end"]}
      justify={["center", "center", "flex-start"]}
      bgImage="./images/europe-banner.svg"
      bgSize="cover"
      bgPos="center"
      bgRepeat="no-repeat"
    >
      <Text fontWeight="600" fontSize="36" color="gray.50">Europa</Text>
    </Flex>
  );
}