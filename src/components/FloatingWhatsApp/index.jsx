import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Icon,
  Text,
  Flex,
  useColorModeValue,
  Tooltip
} from '@chakra-ui/react';
import { keyframes } from '@emotion/react';
import { FaWhatsapp, FaTimes } from 'react-icons/fa';
import { useTranslation } from '../../hooks/useTranslation';

// Animação de pulso
const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

// Animação de shake
const shake = keyframes`
  0%, 100% { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(-2px); }
  20%, 40%, 60%, 80% { transform: translateX(2px); }
`;

const FloatingWhatsApp = () => {
  const { t } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(false);
  const [shouldShake, setShouldShake] = useState(false);

  const whatsappNumber = '5521971984430';
  const introMessage = t.contact?.whatsapp?.introMessage || (t.isEnglish 
    ? 'Hello! I saw your website and would like to know more about your telecommunications services.'
    : 'Olá! Vi seu site e gostaria de saber mais sobre seus serviços de telecomunicações.');
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(introMessage)}`;

  // Efeito de shake periódico para chamar atenção
  useEffect(() => {
    const interval = setInterval(() => {
      setShouldShake(true);
      setTimeout(() => setShouldShake(false), 1000);
    }, 8000); // Shake a cada 8 segundos

    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    window.open(whatsappLink, '_blank');
  };

  return (
    <Box
      position="fixed"
      bottom="20px"
      right="20px"
      zIndex="1000"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      {/* Botão Principal */}
      <Tooltip 
        label={t.contact?.whatsapp?.floatingTooltip || (t.isEnglish ? "Chat with us on WhatsApp!" : "Converse conosco no WhatsApp!")}
        placement="left"
        hasArrow
        bg="green.500"
        color="white"
      >
        <Button
          onClick={handleClick}
          size="lg"
          bg="green.500"
          color="white"
          borderRadius="full"
          w={isExpanded ? "auto" : "60px"}
          h="60px"
          minW="60px"
          px={isExpanded ? 6 : 0}
          _hover={{ 
            bg: 'green.600',
            transform: 'scale(1.1)',
            boxShadow: '0 8px 30px rgba(34, 197, 94, 0.4)',
            _before: {
              left: '100%',
            }
          }}
          _active={{
            transform: 'scale(0.95)',
          }}
          transition="all 0.3s ease"
          boxShadow="0 4px 20px rgba(34, 197, 94, 0.3)"
          animation={`${pulse} 2s infinite, ${shouldShake ? shake : ''} 0.5s ease-in-out`}
          position="relative"
          overflow="hidden"
          _before={{
            content: '""',
            position: 'absolute',
            top: 0,
            left: '-100%',
            width: '100%',
            height: '100%',
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
            transition: 'left 0.6s ease',
          }}
        >
          <Flex align="center" gap={isExpanded ? 3 : 0}>
            <Icon as={FaWhatsapp} w={6} h={6} />
            {isExpanded && (
              <Text 
                fontSize="md" 
                fontWeight="bold"
                whiteSpace="nowrap"
                opacity={isExpanded ? 1 : 0}
                transition="opacity 0.3s ease"
              >
                {t.contact?.whatsapp?.message || (t.isEnglish ? 'Talk to us' : 'Fale conosco')}
              </Text>
            )}
          </Flex>
        </Button>
      </Tooltip>

      {/* Indicador de "novo" ou "online" */}
      <Box
        position="absolute"
        top="-2px"
        right="-2px"
        bg="red.500"
        color="white"
        borderRadius="full"
        w="16px"
        h="16px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        fontSize="10px"
        fontWeight="bold"
        animation={`${pulse} 1.5s infinite`}
      >
        ●
      </Box>

      {/* Efeito de ondas ao redor do botão */}
      <Box
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        w="60px"
        h="60px"
        borderRadius="full"
        border="2px solid"
        borderColor="green.400"
        opacity="0.6"
        animation={`${pulse} 2s infinite`}
        pointerEvents="none"
      />
      
      <Box
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        w="80px"
        h="80px"
        borderRadius="full"
        border="2px solid"
        borderColor="green.400"
        opacity="0.3"
        animation={`${pulse} 2s infinite 0.5s`}
        pointerEvents="none"
      />
    </Box>
  );
};

export default FloatingWhatsApp;
