import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
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
    }
  }
})

export default theme