import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    gray: {
      "300": "#999999",
      "100": "#DADADA",
      "50": "#F5F8FA"
    },
    green: {
      "600": "#47585B"
    },
    yellow: {
      "800": "#FFBA08"
    }
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins'
  },
  styles: {
    global: {
      body: {
        bg: 'gray.50',
        color: 'gray.600'
      }
    }
  }
});