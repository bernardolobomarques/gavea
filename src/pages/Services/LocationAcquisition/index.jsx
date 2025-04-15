import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  Icon,
  Button,
  List,
  ListItem,
  ListIcon,
  Flex,
  useColorModeValue,
  Image,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import { FaSearchLocation, FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import torre2 from '../../../assets/torre2.png';
import rooftop1 from '../../../assets/rooftop1.JPG';
import rooftop2 from '../../../assets/rooftop2.jpg';
import rooftop3 from '../../../assets/rooftop3.jpeg';

const MotionBox = motion(Box);

const LocationAcquisition = () => {
  const benefits = [
    'Análise estratégica de localização',
    'Negociação especializada',
    'Due diligence completa',
    'Gestão de documentação',
    'Avaliação técnica detalhada',
    'Otimização de custos'
  ];

  const services = [
    {
      title: 'Prospecção de Locais',
      description: 'Identificação e avaliação de locais estratégicos para implementação de infraestrutura.'
    },
    {
      title: 'Negociação',
      description: 'Condução profissional de negociações com proprietários e partes interessadas.'
    },
    {
      title: 'Análise Legal',
      description: 'Verificação completa da documentação e situação legal dos imóveis.'
    },
    {
      title: 'Viabilidade Técnica',
      description: 'Avaliação detalhada das condições técnicas e estruturais do local.'
    }
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        pos="relative"
        h="50vh"
        minH="400px"
        display="flex"
        alignItems="center"
        overflow="hidden"
      >
        <Box
          pos="absolute"
          top={0}
          left={0}
          w="full"
          h="full"
          bgImage={`url(${torre2})`}
          bgPosition="center"
          bgSize="cover"
          bgRepeat="no-repeat"
          filter="brightness(0.7)"
        />
        <Container maxW="1200px" pos="relative" zIndex={1}>
          <VStack spacing={6} align="flex-start" color="white">
            <Flex align="center" gap={4}>
              <Icon as={FaSearchLocation} w={10} h={10} />
              <Heading as="h1" size="2xl">
                Aquisição de Locais
              </Heading>
            </Flex>
            <Text fontSize="xl" maxW="700px">
              Identificação e aquisição estratégica de locais para implementação de
              infraestrutura de telecomunicações.
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* Main Content */}
      <Box py={20} bg={useColorModeValue('gray.50', 'gray.900')}>
        <Container maxW="1200px">
          <VStack spacing={16}>
            {/* Overview Section */}
            <VStack spacing={6} align="stretch" w="full">
              <Heading size="xl" color="rgba(42,82,118,1)">
                Visão Geral
              </Heading>
              <Text fontSize="lg" color="gray.600">
                Nossa equipe especializada em aquisição de locais trabalha para identificar
                e garantir os melhores pontos para sua infraestrutura de telecomunicações.
                Realizamos todo o processo de forma profissional, desde a análise inicial
                até a finalização do contrato.
              </Text>
            </VStack>

            {/* Benefits Section */}
            <VStack spacing={6} align="stretch" w="full">
              <Heading size="lg" color="rgba(42,82,118,1)">
                Benefícios
              </Heading>
              <List spacing={3}>
                {benefits.map((benefit, index) => (
                  <ListItem
                    key={index}
                    display="flex"
                    alignItems="center"
                    fontSize="lg"
                  >
                    <ListIcon as={FaCheckCircle} color="rgba(42,82,118,1)" />
                    {benefit}
                  </ListItem>
                ))}
              </List>
            </VStack>

            {/* Services Section */}
            <VStack spacing={6} align="stretch" w="full">
              <Heading size="lg" color="rgba(42,82,118,1)">
                Nossos Serviços
              </Heading>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
                {services.map((service, index) => (
                  <MotionBox
                    key={index}
                    p={6}
                    bg="white"
                    borderRadius="lg"
                    shadow="md"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <VStack align="flex-start" spacing={3}>
                      <Heading size="md" color="rgba(42,82,118,1)">
                        {service.title}
                      </Heading>
                      <Text color="gray.600">{service.description}</Text>
                    </VStack>
                  </MotionBox>
                ))}
              </SimpleGrid>
            </VStack>

            {/* Location Gallery */}
            <VStack spacing={6} align="stretch" w="full">
              <Heading size="lg" color="rgba(42,82,118,1)">
                Portfólio de Locais
              </Heading>
              <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
                <Box
                  h="250px"
                  borderRadius="lg"
                  overflow="hidden"
                  shadow="xl"
                >
                  <Image
                    src={rooftop1}
                    alt="Local para instalação em rooftop"
                    w="100%"
                    h="100%"
                    objectFit="cover"
                    transition="transform 0.3s ease"
                    _hover={{ transform: 'scale(1.05)' }}
                  />
                </Box>
                <Box
                  h="250px"
                  borderRadius="lg"
                  overflow="hidden"
                  shadow="xl"
                >
                  <Image
                    src={rooftop2}
                    alt="Site em rooftop"
                    w="100%"
                    h="100%"
                    objectFit="cover"
                    transition="transform 0.3s ease"
                    _hover={{ transform: 'scale(1.05)' }}
                  />
                </Box>
                <Box
                  h="250px"
                  borderRadius="lg"
                  overflow="hidden"
                  shadow="xl"
                >
                  <Image
                    src={rooftop3}
                    alt="Instalação em cobertura"
                    w="100%"
                    h="100%"
                    objectFit="cover"
                    transition="transform 0.3s ease"
                    _hover={{ transform: 'scale(1.05)' }}
                  />
                </Box>
              </SimpleGrid>
            </VStack>

            {/* Call to Action */}
            <Box
              bg="white"
              p={8}
              borderRadius="lg"
              shadow="xl"
              textAlign="center"
              w="full"
            >
              <VStack spacing={6}>
                <Heading size="lg" color="rgba(42,82,118,1)">
                  Precisa encontrar o local ideal?
                </Heading>
                <Text fontSize="lg" color="gray.600" maxW="700px">
                  Entre em contato para discutir suas necessidades de localização
                  e descobrir como podemos ajudar no seu projeto.
                </Text>
                <Button
                  as={RouterLink}
                  to="/contact"
                  size="lg"
                  bg="rgba(42,82,118,1)"
                  color="white"
                  px={8}
                  rightIcon={<FaArrowRight />}
                  _hover={{
                    bg: 'rgba(42,82,118,0.9)',
                    transform: 'translateY(-2px)',
                  }}
                  transition="all 0.3s"
                >
                  Entre em contato
                </Button>
              </VStack>
            </Box>
          </VStack>
        </Container>
      </Box>
    </Box>
  );
};

export default LocationAcquisition;