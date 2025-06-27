import { 
  Box, 
  Flex, 
  Link, 
  Image, 
  Icon, 
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  IconButton,
  VStack,
  Collapse,
  useBreakpointValue,
  Text
} from '@chakra-ui/react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaChevronDown, FaBars, FaChevronRight } from 'react-icons/fa';
import logoGavea from '../../assets/logoGavea.png';
import LanguageSelector from '../LanguageSelector';
import { useTranslation } from '../../hooks/useTranslation';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen: isMobileOpen, onOpen: onMobileOpen, onClose: onMobileClose } = useDisclosure();
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const { t } = useTranslation();
  const isMobile = useBreakpointValue({ base: true, lg: false });

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
    { path: '/services/small-cell', label: t.services.smallCell },
    { path: '/services/sites-construction', label: t.services.sitesConstruction },
    { path: '/services/location-acquisition', label: t.services.locationAcquisition },
    { path: '/services/licensing', label: t.services.licensing },
    { path: '/services/maintenance', label: t.services.maintenance },
    { path: '/services/technical-consulting', label: t.services.technicalConsulting },
  ];

  const navItems = [
    { path: '/', label: t.navigation.home },
    { path: '/about', label: t.navigation.about },
    { path: '/contact', label: t.navigation.contact }
  ];

  const isServicePath = location.pathname.startsWith('/services');

  const MobileMenu = () => (
    <VStack spacing={4} align="stretch">
      <Link
        as={RouterLink}
        to="/"
        onClick={onMobileClose}
        fontSize="lg"
        fontWeight="500"
        color="rgba(42,82,118,255)"
        py={2}
        borderBottom="1px solid"
        borderColor="gray.200"
      >
        {t.navigation.home}
      </Link>

      <Box>
        <Flex
          justify="space-between"
          align="center"
          py={2}
          cursor="pointer"
          onClick={() => setIsServicesOpen(!isServicesOpen)}
          borderBottom="1px solid"
          borderColor="gray.200"
        >
          <Text fontSize="lg" fontWeight="500" color="rgba(42,82,118,255)">
            {t.navigation.services}
          </Text>
          <Icon 
            as={FaChevronDown} 
            transform={isServicesOpen ? 'rotate(180deg)' : 'rotate(0deg)'}
            transition="transform 0.2s"
          />
        </Flex>
        <Collapse in={isServicesOpen}>
          <VStack spacing={2} align="stretch" pl={4} py={2}>
            {serviceItems.map((item) => (
              <Link
                key={item.path}
                as={RouterLink}
                to={item.path}
                onClick={onMobileClose}
                fontSize="md"
                color="gray.600"
                py={1}
              >
                {item.label}
              </Link>
            ))}
          </VStack>
        </Collapse>
      </Box>

      <Link
        as={RouterLink}
        to="/about"
        onClick={onMobileClose}
        fontSize="lg"
        fontWeight="500"
        color="rgba(42,82,118,255)"
        py={2}
        borderBottom="1px solid"
        borderColor="gray.200"
      >
        {t.navigation.about}
      </Link>

      <Link
        as={RouterLink}
        to="/contact"
        onClick={onMobileClose}
        fontSize="lg"
        fontWeight="500"
        color="rgba(42,82,118,255)"
        py={2}
        borderBottom="1px solid"
        borderColor="gray.200"
      >
        {t.navigation.contact}
      </Link>

      <Box pt={4}>
        <LanguageSelector isScrolled={false} />
      </Box>
    </VStack>
  );

  return (
    <>
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
          px={{ base: 4, md: 6 }}
          justify="space-between" 
          align="center"
          height={isScrolled ? { base: '60px', md: '70px' } : { base: '80px', md: '100px' }}
          transition="all 0.3s ease-in-out"
        >
          <Link 
            as={RouterLink} 
            to="/" 
            display="flex" 
            alignItems="center"
          >
            <Box 
              w={isScrolled ? { base: '60px', md: '80px' } : { base: '80px', md: '100px' }}
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

          {/* Desktop Navigation */}
          <Flex 
            gap={isScrolled ? 4 : 6}
            align="center"
            transition="all 0.3s ease-in-out"
            display={{ base: 'none', lg: 'flex' }}
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
              {t.navigation.home}
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
                {t.navigation.services}
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

            {/* Language Selector */}
            <LanguageSelector isScrolled={isScrolled} />
          </Flex>

          {/* Mobile Menu Button */}
          <IconButton
            display={{ base: 'flex', lg: 'none' }}
            onClick={onMobileOpen}
            icon={<FaBars />}
            variant="ghost"
            color={isScrolled ? 'white' : 'rgba(42,82,118,255)'}
            fontSize="lg"
            aria-label="Open Menu"
          />
        </Flex>
      </Box>

      {/* Mobile Drawer */}
      <Drawer isOpen={isMobileOpen} placement="right" onClose={onMobileClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">
            Menu
          </DrawerHeader>
          <DrawerBody>
            <MobileMenu />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;