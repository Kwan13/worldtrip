import { Grid, GridItem, Flex, Box, Text, Tooltip, Image } from '@chakra-ui/react';

export function DescriptionGrid() {
  return (
    <Grid
      maxW="1160px"
      w="100%"
      m="80px auto"
      p={["5", "5", , "5", "0"]}
      templateColumns={[
        "1fr",
        "1fr",
        "repeat(2, 1fr)",
        "repeat(2, 1fr)"
      ]}
      gap={[5]}
    >
      <GridItem>
        <Box >
          <Text fontSize="24px" lineHeight="36px" align="justify">
            A Europa é, por convenção, um dos seis continentes do mundo.
            Compreendendo a península ocidental da Eurásia, a Europa
            geralmente divide-se da Ásia a leste pela divisória de águas
            dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar
            Negro a sudeste.
          </Text>
        </Box>
      </GridItem>
      <GridItem>
        <Flex h="100%" align="center" justify="space-around">
          <Box textAlign="center">
            <Text
              color="yellow.800"
              fontSize="48px"
              fontWeight="600"
              lineHeight="72px"
            >
              50
            </Text>
            <Text
              fontWeight="600"
              fontSize="24px"
              lineHeight="36px"
            >
              países
            </Text>
          </Box>
          <Box textAlign="center">
            <Text
              color="yellow.800"
              fontSize="48px"
              fontWeight="600"
              lineHeight="72px"
            >
              60
            </Text>
            <Text
              fontWeight="600"
              fontSize="24px"
              lineHeight="36px"
            >
              línguas
              </Text>
          </Box>
          <Box textAlign="center">
            <Text
              color="yellow.800"
              fontSize="48px"
              fontWeight="600"
              lineHeight="72px"
            >
              27
            </Text>
            <Flex>
              <Text
                fontWeight="600"
                fontSize="24px"
                lineHeight="36px"
                mr="5px"
              >
                cidades + 100
              </Text>
              <Tooltip label="Alemanha, França, Itália"><Image src="./images/icons/info.svg" /></Tooltip>
            </Flex>

          </Box>
        </Flex>
      </GridItem>
    </Grid>
  );
}