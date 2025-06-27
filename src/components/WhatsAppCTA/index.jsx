import React from 'react';
import {
  Box,
  Container,
  VStack,
  HStack,
  Text,
  Button,
  Icon,
  Avatar,
  Badge,
  keyframes,
  useColorModeValue
} from '@chakra-ui/react';
import { FaWhatsapp, FaUsers, FaClock, FaCheckCircle } from 'react-icons/fa';
import { useTranslation } from '../../hooks/useTranslation';

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`;

const pulse = keyframes`
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.1); opacity: 0.8; }
  100% { transform: scale(1); opacity: 1; }
`;

const WhatsAppCTA = () => {
  const { t } = useTranslation();
  const bgGradient = useColorModeValue(
    'linear(135deg, green.400 0%, green.600 100%)',
    'linear(135deg, green.500 0%, green.700 100%)'
  );

  const whatsappNumber = '5521971984430';
  const introMessage = t.contact?.whatsapp?.introMessage || (t.isEnglish 
    ? 'Hello! I came from your website and I\'m interested in your telecommunications services. Could you help me?'
    : 'Olá! Vim do seu site e tenho interesse em seus serviços de telecomunicações. Podem me ajudar?');
  
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(introMessage)}`;

  const handleClick = () => {
    window.open(whatsappLink, '_blank');
  };

  return (
    <Box
      bg={bgGradient}
      color="white"
      py={16}
      position="relative"
      overflow="hidden"
      _before={{
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.1) 0%, transparent 50%)',
        pointerEvents: 'none',
      }}
      _after={{
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 80% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)',
        pointerEvents: 'none',
      }}
    >
      <Container maxW="1200px" position="relative" zIndex={1}>
        <VStack spacing={8} textAlign="center">
          {/* Header */}
          <VStack spacing={4}>
            <HStack spacing={4}>
              <Box
                bg="white"
                p={4}
                borderRadius="full"
                animation={`${float} 3s ease-in-out infinite`}
              >
                <Icon as={FaWhatsapp} w={12} h={12} color="green.500" />
              </Box>
              <Badge
                colorScheme="yellow"
                variant="solid"
                px={3}
                py={1}
                borderRadius="full"
                fontSize="sm"
                animation={`${pulse} 2s infinite`}
              >
                {t.isEnglish ? 'LIVE SUPPORT' : 'SUPORTE AO VIVO'}
              </Badge>
            </HStack>

            <Text fontSize="4xl" fontWeight="bold" lineHeight="1.2">
              {t.isEnglish 
                ? 'Get Expert Help Right Now!'
                : 'Obtenha Ajuda Especializada Agora!'
              }
            </Text>

            <Text fontSize="xl" opacity={0.9} maxW="600px">
              {t.isEnglish 
                ? 'Connect instantly with our telecommunications specialists via WhatsApp. Professional support, quick solutions, and personalized service.'
                : 'Conecte-se instantaneamente com nossos especialistas em telecomunicações via WhatsApp. Suporte profissional, soluções rápidas e atendimento personalizado.'
              }
            </Text>
          </VStack>

          {/* Features */}
          <HStack
            spacing={8}
            wrap="wrap"
            justify="center"
            maxW="800px"
          >
            <VStack spacing={2}>
              <Icon as={FaClock} w={6} h={6} color="yellow.200" />
              <Text fontWeight="semibold" fontSize="sm">
                {t.isEnglish ? 'Quick Response' : 'Resposta Rápida'}
              </Text>
              <Text fontSize="xs" opacity={0.8}>
                {t.isEnglish ? 'Usually < 5 min' : 'Geralmente < 5 min'}
              </Text>
            </VStack>

            <VStack spacing={2}>
              <Icon as={FaUsers} w={6} h={6} color="blue.200" />
              <Text fontWeight="semibold" fontSize="sm">
                {t.isEnglish ? 'Expert Team' : 'Equipe Especializada'}
              </Text>
              <Text fontSize="xs" opacity={0.8}>
                {t.isEnglish ? '10+ years exp.' : '10+ anos exp.'}
              </Text>
            </VStack>

            <VStack spacing={2}>
              <Icon as={FaCheckCircle} w={6} h={6} color="green.200" />
              <Text fontWeight="semibold" fontSize="sm">
                {t.isEnglish ? 'Free Consulting' : 'Consultoria Gratuita'}
              </Text>
              <Text fontSize="xs" opacity={0.8}>
                {t.isEnglish ? 'No commitment' : 'Sem compromisso'}
              </Text>
            </VStack>
          </HStack>

          {/* Team Preview */}
          <VStack spacing={4}>
            <Text fontSize="sm" opacity={0.9}>
              {t.isEnglish ? 'Meet our support team:' : 'Conheça nossa equipe de suporte:'}
            </Text>
            <HStack spacing={-2}>
              <Avatar size="md" bg="blue.500" />
              <Avatar size="md" bg="purple.500" />
              <Avatar size="md" bg="orange.500" />
              <Avatar size="md" bg="teal.500" />
              <Box
                w="50px"
                h="50px"
                bg="whiteAlpha.200"
                borderRadius="full"
                display="flex"
                alignItems="center"
                justifyContent="center"
                fontSize="sm"
                fontWeight="bold"
                border="2px solid white"
              >
                +6
              </Box>
            </HStack>
            <Text fontSize="xs" opacity={0.8}>
              {t.isEnglish ? '10 specialists available now' : '10 especialistas disponíveis agora'}
            </Text>
          </VStack>

          {/* CTA Button */}
          <Button
            onClick={handleClick}
            size="lg"
            bg="white"
            color="green.600"
            leftIcon={<Icon as={FaWhatsapp} w={6} h={6} />}
            _hover={{ 
              bg: 'gray.100',
              transform: 'translateY(-3px)',
              boxShadow: '0 15px 35px rgba(255, 255, 255, 0.2)',
              _before: {
                left: '100%',
              }
            }}
            _active={{
              transform: 'translateY(-1px)',
            }}
            transition="all 0.3s ease"
            borderRadius="full"
            px={12}
            py={6}
            fontSize="xl"
            fontWeight="bold"
            h="60px"
            boxShadow="0 10px 25px rgba(255, 255, 255, 0.1)"
            position="relative"
            overflow="hidden"
            _before={{
              content: '""',
              position: 'absolute',
              top: 0,
              left: '-100%',
              width: '100%',
              height: '100%',
              background: 'linear-gradient(90deg, transparent, rgba(34, 197, 94, 0.1), transparent)',
              transition: 'left 0.6s ease',
            }}
          >
            {t.isEnglish ? 'Start WhatsApp Chat' : 'Iniciar Chat no WhatsApp'}
          </Button>

          <Text fontSize="sm" opacity={0.7}>
            {t.isEnglish 
              ? '💬 You will be redirected to WhatsApp to continue the conversation'
              : '💬 Você será redirecionado para o WhatsApp para continuar a conversa'
            }
          </Text>
        </VStack>
      </Container>
    </Box>
  );
};

export default WhatsAppCTA;
