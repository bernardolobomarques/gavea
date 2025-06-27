import { useState, useEffect } from 'react';
import { Box, IconButton, useColorModeValue } from '@chakra-ui/react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const bgColor = useColorModeValue('rgba(42,82,118,1)', 'rgba(42,82,118,1)');

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsVisible(scrollTop > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <Box
      position="fixed"
      bottom={{ base: '80px', md: '90px' }}
      left={{ base: '15px', md: '20px' }}
      zIndex="999"
    >
      <IconButton
        icon={<FaArrowUp />}
        onClick={scrollToTop}
        size={{ base: 'md', md: 'lg' }}
        bg={bgColor}
        color="white"
        borderRadius="full"
        boxShadow="0 4px 12px rgba(42, 82, 118, 0.3)"
        _hover={{
          bg: 'rgba(42,82,118,0.9)',
          transform: 'translateY(-2px)',
          boxShadow: '0 6px 20px rgba(42, 82, 118, 0.4)',
        }}
        _active={{
          transform: 'translateY(0)',
        }}
        transition="all 0.3s ease"
        aria-label="Voltar ao topo"
      />
    </Box>
  );
};

export default ScrollToTop;
