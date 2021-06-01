import { Box, Image, Flex, Text } from '@chakra-ui/react';

interface CardProps {
  imageUrl: string;
  city: string;
  country: string;
  countryImgUrl: string;
}

export function Card({ imageUrl, city, country, countryImgUrl }: CardProps) {
  return (
    <Box maxW="256px" w="100%" h="279px" borderRadius="5px" >
      <Image src={imageUrl} alt={city} />
      <Flex
        align="center"
        justify="space-between"
        p="20px"
        border="1px"
        borderColor="yellow.800"
        borderTop="0"
        borderRadius="0 0 5px 5px"
      >
        <Box>
          <Text
            mb="3"
            fontWeight="600"
            fontSize="20px"
            lineHeight="25px"
          >
            {city}
          </Text>
          <Text color="gray.300" lineHeight="26px">{country}</Text>
        </Box>
        <Image src={countryImgUrl} alt={country} />
      </Flex>
    </Box>
  );
}