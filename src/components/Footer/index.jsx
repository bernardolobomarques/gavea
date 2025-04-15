import { Box, Container, Text, Link, Flex, VStack, Divider } from '@chakra-ui/react';
import { FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const whatsappNumber = '5521971984430';
  const introMessage = 'Olá! Gostaria de entrar em contato.';
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(introMessage)}`;

  return (
    <Box as="footer" bg="rgba(42,82,118,255)" color="white" py={8}>
      <Container maxW="1200px">
        <Flex 
          direction={{ base: 'column', md: 'row' }} 
          justify="space-between"
          align={{ base: 'center', md: 'flex-start' }}
          gap={8}
          mb={8}
        >
          {/* Company Information - Left Column */}
          <VStack align={{ base: 'center', md: 'flex-start' }} spacing={2}>
            <Text fontWeight="bold" fontSize="lg">Informações da Empresa</Text>
            <Text>Gávea Telecomunicações Ltda.</Text>
            <Text>Avenida Presidente Vargas 590/1309</Text>
            <Text>Rio de Janeiro</Text>
            <Text>CEP: 20071-000</Text>
            <Text>CNPJ: 17607948/0001-02</Text>
          </VStack>

          {/* Contact Information - Middle Column */}
          <VStack align={{ base: 'center', md: 'flex-start' }} spacing={2}>
            <Text fontWeight="bold" fontSize="lg">Contato</Text>
            <Text>(21) 97198-4430</Text>
            <Text>contato@gaveatelecomunicacoes.com</Text>
          </VStack>

          {/* WhatsApp Button - Right Column */}
          <Box>
            <Link 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              display="inline-flex"
              alignItems="center"
              bg="green.500"
              color="white"
              px={4}
              py={2}
              borderRadius="md"
              _hover={{ bg: 'green.600' }}
              transition="all 0.2s"
            >
              <FaWhatsapp size={24} style={{ marginRight: '8px' }} />
              Entre em Contato
            </Link>
          </Box>
        </Flex>

        <Divider my={4} borderColor="whiteAlpha.300" />
        
        {/* Credits */}
        <Box textAlign="center" pt={4}>
          <Text fontSize="sm">
            Desenvolvido por{' '}
            <Link
              href="#"
              fontWeight="bold"
              _hover={{ textDecoration: 'underline' }}
            >
              Bernardo Lobo Marques
            </Link>
          </Text>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;