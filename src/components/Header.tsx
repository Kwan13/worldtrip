import Link from 'next/link';
import { Flex, Icon, Link as ChakraLink, Image, Box } from '@chakra-ui/react';
import { RiArrowLeftSLine } from 'react-icons/ri';
import { useRouter } from 'next/dist/client/router';

export function Header() {
  const { asPath } = useRouter();

  let isHome = false;

  if (asPath === '/') {
    isHome = true;
  }
  
  return (
    <Flex w="100%" h="100px" px="140px" align="center" justify="center">
      {isHome ? "" : (
        <Link href="/" passHref>
          <ChakraLink>
            <Icon as={RiArrowLeftSLine} fontSize="30" />
          </ChakraLink>
        </Link>
      )}

      <Flex w="100%" align="center" justify="center">
        <Image src="/images/logo.svg" justify="center" />
      </Flex>
    </Flex>
  );
}