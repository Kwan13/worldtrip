import { Flex, Image, Text, useBreakpointValue } from '@chakra-ui/react';

interface DetailItem {
  icon: string;
  description: string;
}

export function DetailItem({ icon, description }: DetailItem) {
  const isMobile = useBreakpointValue({
    base: false,
    md: true
  });

  return (
    <Flex flexDir={["row", "row", "column"]} align="center" justify="center">
      {isMobile
        ? <Image src={`/images/icons/${icon}.svg`} w="85px" h="85px" mb="24px"/>
        : <Image src="/images/icons/ellipse.svg" w="8px" h="8px" mr="8px" />
      }
      <Text fontWeight="600" fontSize="24px" color="green.600">{description}</Text>
    </Flex>
  )
}