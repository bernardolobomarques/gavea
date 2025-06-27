import React from 'react';
import {
  Box,
  Container,
  VStack,
  HStack,
  Text,
  Button,
  Icon,
  Badge
} from '@chakra-ui/react';
import { keyframes } from '@emotion/react';
import { FaWhatsapp, FaUsers, FaClock } from 'react-icons/fa';
import { useTranslation } from '../../hooks/useTranslation';

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const WhatsAppCTASimple = () => {
  const { t } = useTranslation();

  const whatsappNumber = '5521971984430';
  const introMessage = t.isEnglish 
    ? 'Hello! I came from your website and I\'m interested in your telecommunications services. Could you help me?'
    : 'Olá! Vim do seu site e tenho interesse em seus serviços de telecomunicações. Podem me ajudar?';
  
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(introMessage)}`;

  const handleClick = () => {
    window.open(whatsappLink, '_blank');
  };

  return (
    <Box
      bg="linear-gradient(135deg, #25D366 0%, #128C7E 100%)"
      color="white"
      py={12}
      position="relative"
      overflow="hidden"
    >
      <Container maxW="1200px">
        <VStack spacing={6} textAlign="center">
          {/* Header */}
          <HStack spacing={4}>
            <Icon as={FaWhatsapp} w={12} h={12} animation={`${pulse} 2s infinite`} />
            <Badge
              colorScheme="yellow"
              variant="solid"
              px={3}
              py={1}
              borderRadius="full"
              fontSize="sm"
            >
              {t.isEnglish ? 'LIVE SUPPORT' : 'SUPORTE AO VIVO'}
            </Badge>
          </HStack>

          <Text fontSize="3xl" fontWeight="bold" lineHeight="1.2">
            {t.isEnglish 
              ? 'Get Expert Help Right Now!'
              : 'Obtenha Ajuda Especializada Agora!'
            }
          </Text>

          <Text fontSize="lg" opacity={0.9} maxW="600px">
            {t.isEnglish 
              ? 'Connect instantly with our telecommunications specialists via WhatsApp. Professional support and quick solutions.'
              : 'Conecte-se instantaneamente com nossos especialistas em telecomunicações via WhatsApp. Suporte profissional e soluções rápidas.'
            }
          </Text>

          {/* Features */}
          <HStack spacing={6} wrap="wrap" justify="center">
            <VStack spacing={1}>
              <Icon as={FaClock} w={5} h={5} color="yellow.200" />
              <Text fontWeight="semibold" fontSize="sm">
                {t.isEnglish ? 'Quick Response' : 'Resposta Rápida'}
              </Text>
            </VStack>

            <VStack spacing={1}>
              <Icon as={FaUsers} w={5} h={5} color="blue.200" />
              <Text fontWeight="semibold" fontSize="sm">
                {t.isEnglish ? 'Expert Team' : 'Equipe Especializada'}
              </Text>
            </VStack>
          </HStack>

          {/* CTA Button */}
          <Button
            onClick={handleClick}
            size="lg"
            bg="white"
            color="green.600"
            leftIcon={<Icon as={FaWhatsapp} w={6} h={6} />}
            _hover={{ 
              bg: 'gray.100',
              transform: 'translateY(-2px)',
              boxShadow: '0 10px 25px rgba(255, 255, 255, 0.2)'
            }}
            _active={{
              transform: 'translateY(0)',
            }}
            transition="all 0.3s ease"
            borderRadius="full"
            px={10}
            py={6}
            fontSize="lg"
            fontWeight="bold"
            h="50px"
          >
            {t.isEnglish ? 'Start WhatsApp Chat' : 'Iniciar Chat no WhatsApp'}
          </Button>

          <Text fontSize="sm" opacity={0.7}>
            {t.isEnglish 
              ? '💬 You will be redirected to WhatsApp'
              : '💬 Você será redirecionado para o WhatsApp'
            }
          </Text>
        </VStack>
      </Container>
    </Box>
  );
};

export default WhatsAppCTASimple;
