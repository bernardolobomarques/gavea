import { ChakraProvider, Box, Flex } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import theme from './styles/theme'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Flex minH="100vh" direction="column">
        <Header />
        <Box flex="1" mt="100px">
          <Outlet />
        </Box>
        <Footer />
      </Flex>
    </ChakraProvider>
  )
}

export default App
