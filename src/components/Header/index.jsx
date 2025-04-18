import { Box, Flex, Link, Image, Menu, MenuButton, MenuList, MenuItem, Icon, useDisclosure } from '@chakra-ui/react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import logoGavea from '../../assets/logoGavea.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const serviceItems = [
    { path: '/services/small-cell', label: 'Instalação de Small Cell' },
    { path: '/services/sites-construction', label: 'Construção de Sites' },
    { path: '/services/location-acquisition', label: 'Busca e Negociação de Locais' },
    { path: '/services/licensing', label: 'Licenciamento' },
    { path: '/services/maintenance', label: 'Manutenção Corretiva' },
    { path: '/services/technical-consulting', label: 'Consultoria Técnica' },
  ];

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'Sobre Nós' },
    { path: '/contact', label: 'Contato' }
  ];

  const isServicePath = location.pathname.startsWith('/services');

  return (
    <Box
      as="header"
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex="1000"
      transition="all 0.3s ease-in-out"
      bg={isScrolled ? 'rgba(42,82,118,255)' : 'white'}
      boxShadow={isScrolled ? '0 2px 10px rgba(0,0,0,0.1)' : 'none'}
      borderBottom={!isScrolled ? '1px solid' : 'none'}
      borderColor="rgba(42,82,118,0.1)"
    >
      <Flex 
        maxW="1200px" 
        mx="auto" 
        px={4} 
        justify="space-between" 
        align="center"
        height={isScrolled ? '70px' : '100px'}
        transition="all 0.3s ease-in-out"
      >
        <Link 
          as={RouterLink} 
          to="/" 
          display="flex" 
          alignItems="center"
        >
          <Box 
            w={isScrolled ? '80px' : '100px'} 
            transition="all 0.3s ease-in-out"
            bg="white"
            p={1}
            borderRadius="md"
          >
            <Image 
              src={logoGavea} 
              alt="Gavea Logo"
              width="100%"
              height="auto"
              objectFit="contain"
            />
          </Box>
        </Link>

        <Flex 
          gap={isScrolled ? 4 : 6}
          align="center"
          transition="all 0.3s ease-in-out"
        >
          {/* Regular nav items */}
          <Link
            as={RouterLink}
            to="/"
            fontSize={isScrolled ? 'sm' : 'md'}
            fontWeight="500"
            color={isScrolled ? 'white' : 'rgba(42,82,118,255)'}
            position="relative"
            _hover={{
              textDecoration: 'none',
              _after: {
                width: '100%'
              }
            }}
            _after={{
              content: '""',
              position: 'absolute',
              bottom: '-2px',
              left: '0',
              width: location.pathname === '/' ? '100%' : '0%',
              height: '2px',
              backgroundColor: isScrolled ? 'white' : 'rgba(42,82,118,255)',
              transition: 'width 0.2s ease-in-out'
            }}
          >
            Home
          </Link>

          {/* Services Dropdown */}
          <Box 
            position="relative" 
            onMouseEnter={onOpen} 
            onMouseLeave={onClose}
          >
            <Link
              as={RouterLink}
              to="/services"
              fontSize={isScrolled ? 'sm' : 'md'}
              fontWeight="500"
              color={isScrolled ? 'white' : 'rgba(42,82,118,255)'}
              position="relative"
              display="inline-flex"
              alignItems="center"
              h="100%"
              _hover={{
                textDecoration: 'none',
                _after: {
                  width: '100%'
                }
              }}
              _after={{
                content: '""',
                position: 'absolute',
                bottom: '-2px',
                left: '0',
                width: isServicePath ? '100%' : '0%',
                height: '2px',
                backgroundColor: isScrolled ? 'white' : 'rgba(42,82,118,255)',
                transition: 'width 0.2s ease-in-out'
              }}
            >
              Serviços
              <Icon as={FaChevronDown} ml={1} w={3} h={3} />
            </Link>
            <Box
              position="absolute"
              top="100%"
              left="50%"
              transform="translateX(-50%)"
              pt={1}
              mt={1}
              zIndex={1001}
              opacity={isOpen ? 1 : 0}
              visibility={isOpen ? "visible" : "hidden"}
              transition="all 0.2s"
            >
              <Box
                minW="200px"
                bg="white"
                boxShadow="lg"
                borderRadius="md"
                borderColor="rgba(42,82,118,0.1)"
                border="1px solid"
                py={2}
                position="relative"
                _before={{
                  content: '""',
                  position: 'absolute',
                  top: '-12px',
                  left: 0,
                  right: 0,
                  height: '12px',
                  bg: 'transparent'
                }}
              >
                {serviceItems.map((item) => (
                  <Link
                    key={item.path}
                    as={RouterLink}
                    to={item.path}
                    display="block"
                    px={4}
                    py={2}
                    color="rgba(42,82,118,255)"
                    _hover={{ bg: 'rgba(42,82,118,0.1)' }}
                    fontSize="sm"
                  >
                    {item.label}
                  </Link>
                ))}
              </Box>
            </Box>
          </Box>

          {/* Other nav items */}
          {navItems.slice(1).map((item) => (
            <Link
              key={item.path}
              as={RouterLink}
              to={item.path}
              fontSize={isScrolled ? 'sm' : 'md'}
              fontWeight="500"
              color={isScrolled ? 'white' : 'rgba(42,82,118,255)'}
              position="relative"
              _hover={{
                textDecoration: 'none',
                _after: {
                  width: '100%'
                }
              }}
              _after={{
                content: '""',
                position: 'absolute',
                bottom: '-2px',
                left: '0',
                width: location.pathname === item.path ? '100%' : '0%',
                height: '2px',
                backgroundColor: isScrolled ? 'white' : 'rgba(42,82,118,255)',
                transition: 'width 0.2s ease-in-out'
              }}
            >
              {item.label}
            </Link>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;