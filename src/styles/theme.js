import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  breakpoints: {
    base: '0px',
    sm: '480px',
    md: '768px',
    lg: '992px',
    xl: '1280px',
    '2xl': '1536px',
  },
  styles: {
    global: {
      body: {
        bg: '#edf2f7',
        color: 'gray.800'
      }
    }
  },
  components: {
    Container: {
      baseStyle: {
        maxW: '1200px',
        px: { base: 4, md: 6 }
      }
    },
    Button: {
      baseStyle: {
        _focus: {
          boxShadow: 'none'
        }
      }
    }
  }
})

export default theme