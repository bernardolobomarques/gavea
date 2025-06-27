import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Text,
  Button,
  Flex,
  Icon,
  CloseButton
} from '@chakra-ui/react';
import { FaWhatsapp } from 'react-icons/fa';
import { useTranslation } from '../../hooks/useTranslation';

const WhatsAppBannerSimple = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(true);

  const whatsappNumber = '5521971984430';
  const introMessage = t.isEnglish 
    ? 'Hello! I saw your website and would like to know more about your telecommunications services.'
    : 'Olá! Vi seu site e gostaria de saber mais sobre seus serviços de telecomunicações.';
  
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(introMessage)}`;

  // Auto hide after 15 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 15000);

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
      bg="green.500"
      color="white"
      py={2}
      boxShadow="0 2px 10px rgba(34, 197, 94, 0.3)"
    >
      <Container maxW="1200px">
        <Flex align="center" justify="space-between">
          <Flex align="center" gap={3}>
            <Icon as={FaWhatsapp} w={6} h={6} />
            <Text fontSize="sm" fontWeight="semibold">
              {t.isEnglish 
                ? '🚀 Get instant support via WhatsApp - Quick responses guaranteed!'
                : '🚀 Suporte instantâneo via WhatsApp - Respostas rápidas garantidas!'
              }
            </Text>
          </Flex>

          <Flex align="center" gap={2}>
            <Button
              onClick={handleClick}
              size="sm"
              bg="white"
              color="green.600"
              _hover={{ 
                bg: 'gray.100'
              }}
              borderRadius="full"
              px={4}
              fontWeight="bold"
              fontSize="xs"
            >
              {t.isEnglish ? 'Chat Now' : 'Conversar'}
            </Button>

            <CloseButton
              onClick={handleClose}
              size="sm"
              color="white"
              _hover={{ bg: 'whiteAlpha.200' }}
            />
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default WhatsAppBannerSimple;
