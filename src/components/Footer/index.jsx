import { Box, Container, Text, Link, Flex, VStack } from '@chakra-ui/react';
import { useTranslation } from '../../hooks/useTranslation';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <Box as="footer" bg="rgba(42,82,118,255)" color="white" py={{ base: 6, md: 8 }}>
      <Container maxW="1200px">
        <Flex 
          direction={{ base: 'column', md: 'row' }} 
          justify="space-between"
          align={{ base: 'center', md: 'flex-start' }}
          gap={{ base: 6, md: 8 }}
        >
          {/* Company Information - Left Column */}
          <VStack align={{ base: 'center', md: 'flex-start' }} spacing={2}>
            <Text fontWeight="bold" fontSize={{ base: 'md', md: 'lg' }}>{t.footer.companyInfo}</Text>
            <Text fontSize={{ base: 'sm', md: 'md' }}>Gávea Telecomunicações Ltda.</Text>
            <Text fontSize={{ base: 'sm', md: 'md' }}>Avenida Presidente Vargas 590/1309</Text>
            <Text fontSize={{ base: 'sm', md: 'md' }}>Rio de Janeiro</Text>
            <Text fontSize={{ base: 'sm', md: 'md' }}>CEP: 20071-000</Text>
            <Text fontSize={{ base: 'sm', md: 'md' }}>CNPJ: 17607948/0001-02</Text>
          </VStack>

          {/* Contact Information - Right Column */}
          <VStack align={{ base: 'center', md: 'flex-start' }} spacing={2}>
            <Text fontWeight="bold" fontSize={{ base: 'md', md: 'lg' }}>{t.navigation.contact}</Text>
            <Text fontSize={{ base: 'sm', md: 'md' }}>{t.contact.info.phone.value}</Text>
            <Text fontSize={{ base: 'sm', md: 'md' }}>{t.contact.info.email.value}</Text>
          </VStack>
        </Flex>
        
        {/* Credits */}
        <Box textAlign="center" pt={{ base: 6, md: 8 }}>
          <Text fontSize="xs">
            {t.footer.developedBy}{' '}
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