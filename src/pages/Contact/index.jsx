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
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaWhatsapp } from 'react-icons/fa';
import { useTranslation } from '../../hooks/useTranslation';

const Contact = () => {
  const toast = useToast();
  const { t } = useTranslation();

  const introMessage = t.isEnglish 
    ? 'Hello! I would like to get in touch about telecommunications services.'
    : 'Olá! Gostaria de entrar em contato sobre serviços de telecomunicações.';

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Aqui você pode implementar a lógica de envio do formulário
      toast({
        title: t.contact.form.success,
        description: 'Entraremos em contato em breve.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: t.common.error,
        description: t.contact.form.error,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Container maxW="1200px" py={10}>
      <VStack spacing={8} align="stretch" mb={8}>
        <Heading as="h2" size="xl" textAlign="center" color="rgba(42,82,118,255)">{t.contact.title}</Heading>
      </VStack>

      <Flex direction={{ base: 'column', lg: 'row' }} gap={8} bg="white" p={8} borderRadius="lg" boxShadow="0 2px 10px rgba(0,0,0,0.1)">
        {/* Left Column - Contact Info and Map */}
        <VStack flex="1" align="stretch" spacing={8}>
          <Box>
            <Heading as="h3" size="lg" mb={6} color="rgba(42,82,118,255)">
              {t.contact.info.title}
            </Heading>
            
            <VStack spacing={4} align="stretch">
              <Flex align="center" gap={3}>
                <Icon as={FaPhone} color="rgba(42,82,118,255)" />
                <Text color="rgba(42,82,118,255)">{t.contact.info.phone.value}</Text>
              </Flex>
              
              <Flex align="center" gap={3}>
                <Icon as={FaEnvelope} color="rgba(42,82,118,255)" />
                <Text color="rgba(42,82,118,255)">{t.contact.info.email.value}</Text>
              </Flex>
              
              <Flex align="center" gap={3}>
                <Icon as={FaMapMarkerAlt} color="rgba(42,82,118,255)" />
                <Text color="rgba(42,82,118,255)">{t.contact.info.address.value}</Text>
              </Flex>
              
              <Flex align="center" gap={3}>
                <Icon as={FaClock} color="rgba(42,82,118,255)" />
                <Text color="rgba(42,82,118,255)">{t.contact.info.hours.value}</Text>
              </Flex>
            </VStack>
          </Box>

          {/* WhatsApp Section */}
          <Box 
            bg="green.50" 
            p={6} 
            borderRadius="lg" 
            border="2px solid" 
            borderColor="green.200"
            textAlign="center"
          >
            <VStack spacing={4}>
              <Icon as={FaWhatsapp} w={8} h={8} color="green.500" />
              <Text fontWeight="bold" fontSize="lg" color="green.700">
                {t.contact.whatsapp.title}
              </Text>
              <Text color="green.600">
                {t.isEnglish 
                  ? "For immediate assistance, contact us via WhatsApp!"
                  : "Para atendimento imediato, entre em contato pelo WhatsApp!"
                }
              </Text>
              <Button
                as="a"
                href={`https://wa.me/5521971984430?text=${encodeURIComponent(introMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                bg="green.500"
                color="white"
                leftIcon={<Icon as={FaWhatsapp} w={5} h={5} />}
                _hover={{
                  bg: 'green.600',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 25px rgba(34, 197, 94, 0.3)'
                }}
                transition="all 0.3s"
                borderRadius="full"
                boxShadow="0 4px 15px rgba(34, 197, 94, 0.2)"
              >
                {t.contact.whatsapp.message}
              </Button>
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
                <FormLabel color="rgba(42,82,118,255)">{t.contact.form.name}</FormLabel>
                <Input 
                  type="text" 
                  placeholder={t.contact.form.namePlaceholder}
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
                <FormLabel color="rgba(42,82,118,255)">{t.contact.form.email}</FormLabel>
                <Input 
                  type="email" 
                  placeholder={t.contact.form.emailPlaceholder}
                  bg="white"
                  borderColor="rgba(42,82,118,0.4)"
                  _hover={{ borderColor: "rgba(42,82,118,0.6)" }}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel color="rgba(42,82,118,255)">{t.contact.form.subject}</FormLabel>
                <Input 
                  type="text" 
                  placeholder={t.contact.form.subjectPlaceholder}
                  bg="white"
                  borderColor="rgba(42,82,118,0.4)"
                  _hover={{ borderColor: "rgba(42,82,118,0.6)" }}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel color="rgba(42,82,118,255)">{t.contact.form.message}</FormLabel>
                <Textarea 
                  placeholder={t.contact.form.messagePlaceholder}
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
                {t.contact.form.send}
              </Button>
            </Stack>
          </form>
        </Box>
      </Flex>
    </Container>
  );
};

export default Contact;