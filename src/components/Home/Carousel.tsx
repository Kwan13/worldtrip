import { Flex, Divider, Text, Image } from '@chakra-ui/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export function Carousel() {
  return (
    <Flex flexDir="column" align="center" mt="80px" mb="80px" w="100%" px={[0, 0, 20]}>
      <Divider orientation="horizontal" w="90px" borderColor="green.600" border="1px" />
      <Text
        fontSize={["20px", "20px", "36px"]}
        lineHeight={["30px", "30px", "54px"]}
        mt="52px"
      >
        Vamos nessa?
      </Text>
      <Text
        fontSize={["20px", "20px", "36px"]}
        lineHeight={["30px", "30px", "54px"]}
        mb="52px"
      >
        então escolha seu continente
      </Text>

      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        style={{ width: '100%' }}
      >
        <SwiperSlide >
          <Flex
            w="100%"
            h="450px"
            bgImage="/images/europe.svg"
            bgSize="cover"
            align="center"
            justify="center"
            bgRepeat="no-repeat"
            textAlign="center"
          >
            <Link href="/europe">
              <a>
                <Text
                  color="white"
                  fontWeight="700"
                  fontSize={["24px", "24px", "48px"]}
                >
                  Europa
                </Text>
                <Text
                  color="white"
                  fontWeight="700"
                  fontSize={["14px", "14px", "24px"]}
                >
                  O continente mais antigo
                </Text>
              </a>
            </Link>
          </Flex>
        </SwiperSlide>
        <SwiperSlide >
          <Flex
            w="100%"
            h="450px"
            bgImage="/images/europe.svg"
            bgSize="cover"
            align="center"
            justify="center"
            bgRepeat="no-repeat"
            textAlign="center"
          >
            <Link href="/europe">
              <a>
                <Text
                  color="white"
                  fontWeight="700"
                  fontSize={["24px", "24px", "48px"]}
                >
                  Europa
                </Text>
                <Text
                  color="white"
                  fontWeight="700"
                  fontSize={["14px", "14px", "24px"]}
                >
                  O continente mais antigo
                </Text>
              </a>
            </Link>
          </Flex>
        </SwiperSlide>
      </Swiper>
    </Flex>
  );
}