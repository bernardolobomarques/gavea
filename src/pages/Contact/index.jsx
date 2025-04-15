import {
  Container,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  VStack,
  useToast,
  Flex,
  Box,
  Text,
  Icon,
  Stack,
} from '@chakra-ui/react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Contact = () => {
  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Aqui você pode implementar a lógica de envio do formulário
      toast({
        title: 'Mensagem enviada!',
        description: 'Entraremos em contato em breve.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: 'Erro',
        description: 'Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Container maxW="1200px" py={10}>
      <VStack spacing={8} align="stretch" mb={8}>
        <Heading as="h2" size="xl" textAlign="center" color="rgba(42,82,118,255)">Fale Conosco</Heading>
      </VStack>

      <Flex direction={{ base: 'column', lg: 'row' }} gap={8} bg="white" p={8} borderRadius="lg" boxShadow="0 2px 10px rgba(0,0,0,0.1)">
        {/* Left Column - Contact Info and Map */}
        <VStack flex="1" align="stretch" spacing={8}>
          <Box>
            <Heading as="h3" size="lg" mb={6} color="rgba(42,82,118,255)">
              Envie sua mensagem
            </Heading>
            
            <VStack spacing={4} align="stretch">
              <Flex align="center" gap={3}>
                <Icon as={FaPhone} color="rgba(42,82,118,255)" />
                <Text color="rgba(42,82,118,255)">(21) 97198-4430</Text>
              </Flex>
              
              <Flex align="center" gap={3}>
                <Icon as={FaEnvelope} color="rgba(42,82,118,255)" />
                <Text color="rgba(42,82,118,255)">contato@gaveatelecomunicacoes.com</Text>
              </Flex>
              
              <Flex align="center" gap={3}>
                <Icon as={FaMapMarkerAlt} color="rgba(42,82,118,255)" />
                <Text color="rgba(42,82,118,255)">Avenida Presidente Vargas 590/1309, Rio de Janeiro</Text>
              </Flex>
              
              <Flex align="center" gap={3}>
                <Icon as={FaClock} color="rgba(42,82,118,255)" />
                <Text color="rgba(42,82,118,255)">Segunda - Sexta 9:00 - 17:00</Text>
              </Flex>
            </VStack>
          </Box>

          <Box h="300px" w="100%" bg="white" borderRadius="md" overflow="hidden">
            <iframe
              src="https://maps.google.com/maps?q=Avenida%20Presidente%20Vargas%20590%201309%2C%20Rio%20de%20Janeiro&t=m&z=18&output=embed&iwloc=near"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Gávea Telecomunicações"
            />
          </Box>
        </VStack>

        {/* Right Column - Contact Form */}
        <Box flex="1">
          <form onSubmit={handleSubmit}>
            <Stack spacing={4}>
              <FormControl isRequired>
                <FormLabel color="rgba(42,82,118,255)">Nome</FormLabel>
                <Input 
                  type="text" 
                  placeholder="Nome" 
                  bg="white"
                  borderColor="rgba(42,82,118,0.4)"
                  _hover={{ borderColor: "rgba(42,82,118,0.6)" }}
                />
              </FormControl>
              
              <FormControl isRequired>
                <FormLabel color="rgba(42,82,118,255)">Sobrenome</FormLabel>
                <Input 
                  type="text" 
                  placeholder="Sobrenome" 
                  bg="white"
                  borderColor="rgba(42,82,118,0.4)"
                  _hover={{ borderColor: "rgba(42,82,118,0.6)" }}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel color="rgba(42,82,118,255)">E-mail</FormLabel>
                <Input 
                  type="email" 
                  placeholder="seu@email.com" 
                  bg="white"
                  borderColor="rgba(42,82,118,0.4)"
                  _hover={{ borderColor: "rgba(42,82,118,0.6)" }}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel color="rgba(42,82,118,255)">Assunto</FormLabel>
                <Input 
                  type="text" 
                  placeholder="Assunto" 
                  bg="white"
                  borderColor="rgba(42,82,118,0.4)"
                  _hover={{ borderColor: "rgba(42,82,118,0.6)" }}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel color="rgba(42,82,118,255)">Mensagem</FormLabel>
                <Textarea 
                  placeholder="Digite sua mensagem" 
                  rows={6} 
                  bg="white"
                  borderColor="rgba(42,82,118,0.4)"
                  _hover={{ borderColor: "rgba(42,82,118,0.6)" }}
                />
              </FormControl>

              <Button 
                type="submit" 
                bg="rgba(42,82,118,255)"
                color="white"
                size="lg"
                w="full"
                _hover={{ bg: "rgba(42,82,118,0.9)" }}
              >
                Enviar
              </Button>
            </Stack>
          </form>
        </Box>
      </Flex>
    </Container>
  );
};

export default Contact;