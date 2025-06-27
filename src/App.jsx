import { ChakraProvider, Box, Flex } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import theme from './styles/theme'
import { LanguageProvider } from './contexts/LanguageContext'

function App() {
  return (
    <LanguageProvider>
      <ChakraProvider theme={theme}>
        <Flex minH="100vh" direction="column">
          <Header />
          <Box flex="1" mt="100px">
            <Outlet />
          </Box>
          <Footer />
        </Flex>
      </ChakraProvider>
    </LanguageProvider>
  )
}

export default App
