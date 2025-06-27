import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Text,
  VStack,
  HStack,
  Avatar,
  Flex,
  CloseButton,
  Input,
  IconButton,
  keyframes,
  useColorModeValue,
  Divider
} from '@chakra-ui/react';
import { FaWhatsapp, FaPaperPlane, FaUser } from 'react-icons/fa';
import { useTranslation } from '../../hooks/useTranslation';

// Animações
const fadeIn = keyframes`
  from { opacity: 0; transform: scale(0.8); }
  to { opacity: 1; transform: scale(1); }
`;

const slideUp = keyframes`
  from { transform: translateY(100%); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

const typing = keyframes`
  0%, 60%, 100% { transform: translateY(0); }
  30% { transform: translateY(-10px); }
`;

const WhatsAppWidget = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const [message, setMessage] = useState('');

  const whatsappNumber = '5521971984430';
  
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.600');

  // Simular digitação da equipe
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        setIsTyping(true);
      }, 1000);
      
      setTimeout(() => {
        setIsTyping(false);
        setShowWelcome(true);
      }, 3000);
    }
  }, [isOpen]);

  const handleSendMessage = () => {
    const finalMessage = message || (t.isEnglish 
      ? 'Hello! I would like to know more about your telecommunications services.'
      : 'Olá! Gostaria de saber mais sobre seus serviços de telecomunicações.');
    
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(finalMessage)}`;
    window.open(whatsappLink, '_blank');
    setIsOpen(false);
    setMessage('');
  };

  const quickMessages = t.isEnglish ? [
    'I need technical consulting',
    'I want to know about Small Cell',
    'Tell me about your services',
    'I need a quote'
  ] : [
    'Preciso de consultoria técnica',
    'Quero saber sobre Small Cell',
    'Conte-me sobre seus serviços',
    'Preciso de um orçamento'
  ];

  return (
    <Box position="fixed" bottom="20px" right="20px" zIndex="1000">
      {/* Chat Widget */}
      {isOpen && (
        <Box
          mb={4}
          w="350px"
          bg={bgColor}
          borderRadius="2xl"
          border="1px solid"
          borderColor={borderColor}
          boxShadow="0 20px 40px rgba(0,0,0,0.1)"
          animation={`${slideUp} 0.3s ease-out`}
          overflow="hidden"
        >
          {/* Header */}
          <Box bg="green.500" color="white" p={4}>
            <HStack justify="space-between">
              <HStack spacing={3}>
                <Avatar
                  size="sm"
                  bg="green.600"
                  icon={<FaUser />}
                />
                <VStack align="start" spacing={0}>
                  <Text fontWeight="bold" fontSize="sm">
                    {t.isEnglish ? 'Gavea Support Team' : 'Equipe de Suporte Gavea'}
                  </Text>
                  <Text fontSize="xs" opacity={0.9}>
                    {t.isEnglish ? 'Online now' : 'Online agora'}
                  </Text>
                </VStack>
              </HStack>
              <CloseButton
                onClick={() => setIsOpen(false)}
                size="sm"
                color="white"
                _hover={{ bg: 'whiteAlpha.200' }}
              />
            </HStack>
          </Box>

          {/* Chat Area */}
          <Box p={4} minH="200px" maxH="300px" overflowY="auto">
            {/* Typing Indicator */}
            {isTyping && (
              <HStack mb={3}>
                <Avatar size="xs" bg="green.500" icon={<FaUser />} />
                <Box bg="gray.100" p={2} borderRadius="lg" maxW="70%">
                  <HStack spacing={1}>
                    <Box
                      w="6px"
                      h="6px"
                      bg="gray.500"
                      borderRadius="full"
                      animation={`${typing} 1.4s infinite ease-in-out`}
                    />
                    <Box
                      w="6px"
                      h="6px"
                      bg="gray.500"
                      borderRadius="full"
                      animation={`${typing} 1.4s infinite ease-in-out 0.2s`}
                    />
                    <Box
                      w="6px"
                      h="6px"
                      bg="gray.500"
                      borderRadius="full"
                      animation={`${typing} 1.4s infinite ease-in-out 0.4s`}
                    />
                  </HStack>
                </Box>
              </HStack>
            )}

            {/* Welcome Message */}
            {showWelcome && (
              <VStack align="start" spacing={3} mb={4}>
                <HStack align="start">
                  <Avatar size="xs" bg="green.500" icon={<FaUser />} />
                  <Box bg="gray.100" p={3} borderRadius="lg" maxW="80%">
                    <Text fontSize="sm">
                      {t.isEnglish 
                        ? '👋 Hi! How can we help you with your telecommunications needs today?'
                        : '👋 Olá! Como podemos ajudá-lo com suas necessidades de telecomunicações hoje?'
                      }
                    </Text>
                  </Box>
                </HStack>

                {/* Quick Buttons */}
                <VStack spacing={2} w="100%" align="stretch">
                  {quickMessages.map((msg, index) => (
                    <Button
                      key={index}
                      size="sm"
                      variant="outline"
                      colorScheme="green"
                      fontSize="xs"
                      p={2}
                      h="auto"
                      whiteSpace="normal"
                      textAlign="left"
                      onClick={() => {
                        setMessage(msg);
                        handleSendMessage();
                      }}
                      _hover={{ bg: 'green.50' }}
                    >
                      {msg}
                    </Button>
                  ))}
                </VStack>
              </VStack>
            )}
          </Box>

          <Divider />

          {/* Input Area */}
          <Box p={4}>
            <HStack spacing={2}>
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={t.isEnglish ? 'Type your message...' : 'Digite sua mensagem...'}
                size="sm"
                borderRadius="full"
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              />
              <IconButton
                onClick={handleSendMessage}
                icon={<FaPaperPlane />}
                colorScheme="green"
                size="sm"
                borderRadius="full"
                aria-label={t.isEnglish ? 'Send message' : 'Enviar mensagem'}
              />
            </HStack>
            
            <Text fontSize="xs" color="gray.500" mt={2} textAlign="center">
              {t.isEnglish 
                ? 'Continue on WhatsApp for instant support'
                : 'Continue no WhatsApp para suporte instantâneo'
              }
            </Text>
          </Box>
        </Box>
      )}

      {/* Floating Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        size="lg"
        bg="green.500"
        color="white"
        borderRadius="full"
        w="60px"
        h="60px"
        minW="60px"
        p={0}
        _hover={{ 
          bg: 'green.600',
          transform: 'scale(1.1)',
          boxShadow: '0 10px 30px rgba(34, 197, 94, 0.4)',
          _before: {
            opacity: 1,
            transform: 'rotate(45deg) translate(50%, 50%)',
          }
        }}
        _active={{
          transform: 'scale(0.95)',
        }}
        transition="all 0.3s ease"
        boxShadow="0 6px 25px rgba(34, 197, 94, 0.3)"
        animation={`${fadeIn} 0.5s ease-out`}
        position="relative"
        overflow="hidden"
        _before={{
          content: '""',
          position: 'absolute',
          top: '-50%',
          left: '-50%',
          width: '200%',
          height: '200%',
          background: 'linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent)',
          transform: 'rotate(45deg)',
          transition: 'all 0.6s ease',
          opacity: 0,
        }}
      >
        <Icon as={FaWhatsapp} w={7} h={7} />
        
        {/* Notification Badge */}
        <Box
          position="absolute"
          top="-2px"
          right="-2px"
          bg="red.500"
          color="white"
          borderRadius="full"
          w="20px"
          h="20px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          fontSize="10px"
          fontWeight="bold"
          border="2px solid white"
        >
          1
        </Box>
      </Button>
    </Box>
  );
};

export default WhatsAppWidget;
