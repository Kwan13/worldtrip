import { Box, Grid, GridItem, Text } from '@chakra-ui/react';

import { Card } from '../Card';

export function CountryGrid() {
  return (
    <Box
      maxW="1160px"
      width="100%"
      m="0 auto"
      p={["5", "5", , "5", "0"]}
    >
      <Text fontSize="36px" lineHeight="54px" mb="40px">Cidade + 100</Text>
      <Grid
        templateColumns={[
          "1fr",
          "1fr",
          "repeat(3, 1fr)",
          "repeat(4, 1fr)"
        ]}
        gap={[1, 5]}
      >
        <GridItem m={["0 auto", "0 auto", "0"]}>
          <Card
            imageUrl="./images/londres.svg"
            city="Londres"
            country="Reino Unido"
            countryImgUrl="./images/reino-unido.svg"
          />
        </GridItem>
        <GridItem m={["0 auto", "0 auto", "0"]}>
          <Card
            imageUrl="./images/paris.svg"
            city="París"
            country="França"
            countryImgUrl="./images/franca.svg"
          />
        </GridItem>
        <GridItem m={["0 auto", "0 auto", "0"]}>
          <Card
            imageUrl="./images/roma.svg"
            city="Roma"
            country="Itália"
            countryImgUrl="./images/italia.svg"
          />
        </GridItem>
        <GridItem m={["0 auto", "0 auto", "0"]}>
          <Card
            imageUrl="./images/praga.svg"
            city="Praga"
            country="República Tcheca"
            countryImgUrl="./images/republica-tcheca.svg"
          />
        </GridItem>
        <GridItem m={["0 auto", "0 auto", "0"]}>
          <Card
            imageUrl="./images/amsterda.svg"
            city="Amsterdã"
            country="Holanda"
            countryImgUrl="./images/holanda.svg"
          />
        </GridItem>
      </Grid>
    </Box>

  );
}