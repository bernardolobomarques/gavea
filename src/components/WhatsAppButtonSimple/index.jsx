import React from 'react';
import {
  Box,
  Button,
  Text,
  Icon,
  VStack,
  HStack
} from '@chakra-ui/react';
import { keyframes } from '@emotion/react';
import { FaWhatsapp } from 'react-icons/fa';
import { useTranslation } from '../../hooks/useTranslation';

const pulse = keyframes`
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.05); opacity: 0.8; }
  100% { transform: scale(1); opacity: 1; }
`;

const WhatsAppButtonSimple = () => {
  const { t } = useTranslation();
  
  const whatsappNumber = '5521971984430';
  const introMessage = t.isEnglish 
    ? 'Hello! I saw your website and would like to know more about your telecommunications services.'
    : 'Olá! Vi seu site e gostaria de saber mais sobre seus serviços de telecomunicações.';
  
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(introMessage)}`;

  const handleClick = () => {
    window.open(whatsappLink, '_blank');
  };

  return (
    <Box
      position="fixed"
      bottom="20px"
      right="20px"
      zIndex="1000"
    >
      <Button
        onClick={handleClick}
        size="lg"
        bg="green.500"
        color="white"
        borderRadius="full"
        w="70px"
        h="70px"
        minW="70px"
        p={0}
        _hover={{ 
          bg: 'green.600',
          transform: 'scale(1.1)',
          boxShadow: '0 10px 30px rgba(34, 197, 94, 0.4)'
        }}
        _active={{
          transform: 'scale(0.95)',
        }}
        transition="all 0.3s ease"
        boxShadow="0 6px 25px rgba(34, 197, 94, 0.3)"
        animation={`${pulse} 3s infinite`}
      >
        <Icon as={FaWhatsapp} w={8} h={8} />
        
        {/* Notification Badge */}
        <Box
          position="absolute"
          top="-5px"
          right="-5px"
          bg="red.500"
          color="white"
          borderRadius="full"
          w="20px"
          h="20px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          fontSize="12px"
          fontWeight="bold"
          border="2px solid white"
        >
          !
        </Box>
      </Button>
    </Box>
  );
};

export default WhatsAppButtonSimple;
