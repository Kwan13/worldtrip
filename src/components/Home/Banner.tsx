import { Flex, Text, Box, Image } from '@chakra-ui/react';

export function Banner() {
  return (
    <Flex
      bgImage="/images/bg_hero.svg"
      h={["163", "163", "335"]}
      p={[10, 10, 20]}
      justify={["center", "center", "space-between"]}
      align="center"
      bgPosition="top"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
    >
      <Box w="524px">
        <Text fontSize={["20", "20", "36"]} fontWeight="600" color="gray.50">
          5 continentes, <br />infinitas possibilidades.
        </Text>
        <Text color="gray.100" fontSize={["14", "14", "20"]}>
          Chegou a hora de tirar do papel a viagem que você sempre sonhou.
        </Text>
      </Box>
      <Image display={["none", "none", "block"]} src="/images/airplane.svg" mt="auto" />
    </Flex>
  );
}