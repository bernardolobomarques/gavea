import { Box, Container, Text, Link, Flex, VStack } from '@chakra-ui/react';
import { useTranslation } from '../../hooks/useTranslation';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <Box as="footer" bg="rgba(42,82,118,255)" color="white" py={8}>
      <Container maxW="1200px">
        <Flex 
          direction={{ base: 'column', md: 'row' }} 
          justify="space-between"
          align={{ base: 'center', md: 'flex-start' }}
          gap={8}
        >
          {/* Company Information - Left Column */}
          <VStack align={{ base: 'center', md: 'flex-start' }} spacing={2}>
            <Text fontWeight="bold" fontSize="lg">{t.footer.companyInfo}</Text>
            <Text>Gávea Telecomunicações Ltda.</Text>
            <Text>Avenida Presidente Vargas 590/1309</Text>
            <Text>Rio de Janeiro</Text>
            <Text>CEP: 20071-000</Text>
            <Text>CNPJ: 17607948/0001-02</Text>
          </VStack>

          {/* Contact Information - Right Column */}
          <VStack align={{ base: 'center', md: 'flex-start' }} spacing={2}>
            <Text fontWeight="bold" fontSize="lg">{t.navigation.contact}</Text>
            <Text>{t.contact.info.phone.value}</Text>
            <Text>{t.contact.info.email.value}</Text>
          </VStack>
        </Flex>
        
        {/* Credits */}
        <Box textAlign="center" pt={8}>
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