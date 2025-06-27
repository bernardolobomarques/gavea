import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Text,
  Flex,
  Icon,
  CloseButton,
  useColorModeValue,
  keyframes,
  Container
} from '@chakra-ui/react';
import { FaWhatsapp } from 'react-icons/fa';
import { useTranslation } from '../../hooks/useTranslation';

// Animação de slide down
const slideDown = keyframes`
  from { transform: translateY(-100%); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

// Animação de pulso
const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const WhatsAppBanner = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(true);

  const whatsappNumber = '5521971984430';
  const introMessage = t.contact?.whatsapp?.introMessage || (t.isEnglish 
    ? 'Hello! I saw your website and would like to know more about your telecommunications services.'
    : 'Olá! Vi seu site e gostaria de saber mais sobre seus serviços de telecomunicações.');
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(introMessage)}`;

  // Auto hide after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    window.open(whatsappLink, '_blank');
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex="1001"
      bg="linear-gradient(135deg, #25D366 0%, #128C7E 100%)"
      color="white"
      py={3}
      animation={`${slideDown} 0.5s ease-out`}
      boxShadow="0 4px 20px rgba(37, 211, 102, 0.3)"
    >
      <Container maxW="1200px">
        <Flex align="center" justify="space-between">
          <Flex align="center" gap={4}>
            <Icon as={FaWhatsapp} w={8} h={8} animation={`${pulse} 2s infinite`} />
            <Box>
              <Text fontSize="lg" fontWeight="bold">
                {t.isEnglish ? '🚀 Get instant support!' : '🚀 Suporte instantâneo!'}
              </Text>
              <Text fontSize="sm" opacity={0.9}>
                {t.isEnglish 
                  ? 'Chat with our experts now via WhatsApp - Quick responses guaranteed!'
                  : 'Converse com nossos especialistas agora via WhatsApp - Respostas rápidas garantidas!'
                }
              </Text>
            </Box>
          </Flex>

          <Flex align="center" gap={3}>
            <Button
              onClick={handleClick}
              size="lg"
              bg="white"
              color="green.600"
              _hover={{ 
                bg: 'gray.100',
                transform: 'translateY(-2px)',
                boxShadow: '0 8px 25px rgba(255, 255, 255, 0.3)'
              }}
              _active={{
                transform: 'translateY(0)',
              }}
              transition="all 0.3s ease"
              borderRadius="full"
              px={8}
              fontWeight="bold"
              boxShadow="0 4px 15px rgba(255, 255, 255, 0.2)"
              leftIcon={<Icon as={FaWhatsapp} w={5} h={5} />}
            >
              {t.isEnglish ? 'Chat Now' : 'Conversar Agora'}
            </Button>

            <CloseButton
              onClick={handleClose}
              size="md"
              color="white"
              _hover={{ bg: 'whiteAlpha.200' }}
              borderRadius="full"
            />
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default WhatsAppBanner;
