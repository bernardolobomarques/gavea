import React, { useState, useEffect } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  VStack,
  HStack,
  Icon,
  Box,
  Avatar,
  keyframes
} from '@chakra-ui/react';
import { FaWhatsapp, FaRocket, FaClock, FaUsers } from 'react-icons/fa';
import { useTranslation } from '../../hooks/useTranslation';

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-10px); }
  60% { transform: translateY(-5px); }
`;

const WhatsAppModal = ({ isOpen, onClose }) => {
  const { t } = useTranslation();
  const whatsappNumber = '5521971984430';

  const handleContactWhatsApp = () => {
    const introMessage = t.isEnglish 
      ? 'Hello! I came from your website and would like to know more about your telecommunications services. I\'m interested in getting professional support!'
      : 'Olá! Vim do seu site e gostaria de saber mais sobre seus serviços de telecomunicações. Tenho interesse em obter suporte profissional!';
    
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(introMessage)}`;
    window.open(whatsappLink, '_blank');
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="md" isCentered>
      <ModalOverlay bg="blackAlpha.600" backdropFilter="blur(10px)" />
      <ModalContent
        bg="white"
        borderRadius="2xl"
        boxShadow="0 25px 50px rgba(0,0,0,0.15)"
        border="1px solid"
        borderColor="green.100"
        mx={4}
      >
        <ModalHeader textAlign="center" pb={2}>
          <VStack spacing={3}>
            <Box
              bg="green.500"
              p={4}
              borderRadius="full"
              animation={`${bounce} 2s infinite`}
            >
              <Icon as={FaWhatsapp} w={8} h={8} color="white" />
            </Box>
            <Text fontSize="2xl" fontWeight="bold" color="green.600">
              {t.isEnglish ? '🚀 Professional Support' : '🚀 Suporte Profissional'}
            </Text>
          </VStack>
        </ModalHeader>
        
        <ModalCloseButton />
        
        <ModalBody pt={0}>
          <VStack spacing={4} textAlign="center">
            <Text fontSize="lg" color="gray.600">
              {t.isEnglish 
                ? 'Get instant access to our telecommunications experts via WhatsApp!'
                : 'Tenha acesso instantâneo aos nossos especialistas em telecomunicações via WhatsApp!'
              }
            </Text>

            {/* Benefits */}
            <VStack spacing={3} w="100%" align="stretch">
              <HStack spacing={3} p={3} bg="green.50" borderRadius="lg">
                <Icon as={FaClock} color="green.500" w={5} h={5} />
                <Text fontSize="sm" fontWeight="medium">
                  {t.isEnglish ? 'Quick responses - Usually within minutes' : 'Respostas rápidas - Geralmente em minutos'}
                </Text>
              </HStack>

              <HStack spacing={3} p={3} bg="blue.50" borderRadius="lg">
                <Icon as={FaUsers} color="blue.500" w={5} h={5} />
                <Text fontSize="sm" fontWeight="medium">
                  {t.isEnglish ? 'Expert team ready to help you' : 'Equipe especializada pronta para ajudar'}
                </Text>
              </HStack>

              <HStack spacing={3} p={3} bg="purple.50" borderRadius="lg">
                <Icon as={FaRocket} color="purple.500" w={5} h={5} />
                <Text fontSize="sm" fontWeight="medium">
                  {t.isEnglish ? 'Customized solutions for your needs' : 'Soluções personalizadas para suas necessidades'}
                </Text>
              </HStack>
            </VStack>

            {/* Team Preview */}
            <Box w="100%" p={4} bg="gray.50" borderRadius="lg">
              <Text fontSize="sm" fontWeight="semibold" mb={3} color="gray.700">
                {t.isEnglish ? 'Our Support Team:' : 'Nossa Equipe de Suporte:'}
              </Text>
              <HStack justify="center" spacing={-2}>
                <Avatar size="sm" bg="green.500" />
                <Avatar size="sm" bg="blue.500" />
                <Avatar size="sm" bg="purple.500" />
                <Box
                  w="32px"
                  h="32px"
                  bg="gray.200"
                  borderRadius="full"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  fontSize="xs"
                  fontWeight="bold"
                  color="gray.600"
                >
                  +5
                </Box>
              </HStack>
              <Text fontSize="xs" color="gray.600" mt={2}>
                {t.isEnglish ? '8 specialists online now' : '8 especialistas online agora'}
              </Text>
            </Box>
          </VStack>
        </ModalBody>

        <ModalFooter pt={2}>
          <VStack w="100%" spacing={3}>
            <Button
              onClick={handleContactWhatsApp}
              size="lg"
              bg="green.500"
              color="white"
              w="100%"
              leftIcon={<Icon as={FaWhatsapp} w={5} h={5} />}
              _hover={{ 
                bg: 'green.600',
                transform: 'translateY(-2px)',
                boxShadow: '0 10px 25px rgba(34, 197, 94, 0.3)'
              }}
              _active={{
                transform: 'translateY(0)',
              }}
              transition="all 0.3s ease"
              borderRadius="full"
              fontWeight="bold"
              fontSize="lg"
              h="50px"
            >
              {t.isEnglish ? 'Start Conversation' : 'Iniciar Conversa'}
            </Button>
            
            <Text fontSize="xs" color="gray.500" textAlign="center">
              {t.isEnglish 
                ? 'Free consultation • No commitment required'
                : 'Consulta gratuita • Sem compromisso'
              }
            </Text>
          </VStack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default WhatsAppModal;
