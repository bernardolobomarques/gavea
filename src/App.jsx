import { ChakraProvider, Box, Flex } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import theme from './styles/theme'
import { LanguageProvider } from './contexts/LanguageContext'

function App() {
  return (
    <LanguageProvider>
      <ChakraProvider theme={theme}>
        <Flex minH="100vh" direction="column">
          <Header />
          <Box flex="1" mt={{ base: '80px', md: '100px' }}>
            <Outlet />
          </Box>
          <Footer />
          <ScrollToTop />
        </Flex>
      </ChakraProvider>
    </LanguageProvider>
  )
}

export default App
