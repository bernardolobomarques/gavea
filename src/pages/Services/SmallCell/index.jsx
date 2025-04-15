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
  Image,
  useColorModeValue,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import { FaWifi, FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import torre2 from '../../../assets/torre2.png';
import infraestrutura1 from '../../../assets/infraestrutura1.jpg';
import infraestrutura2 from '../../../assets/infraestrutura2.jpg';

const MotionBox = motion(Box);

const SmallCell = () => {
  const benefits = [
    'Melhor cobertura em áreas urbanas densas',
    'Otimização da capacidade de rede',
    'Instalação discreta e integrada à paisagem urbana',
    'Rápida implementação',
    'Baixo impacto visual',
    'Solução ideal para eventos e locais com alto tráfego'
  ];

  const applications = [
    {
      title: 'Áreas Urbanas',
      description: 'Ideal para centros comerciais, áreas residenciais e distritos empresariais.'
    },
    {
      title: 'Equipamentos Urbanos',
      description: 'Integração com mobiliário urbano, postes e estruturas existentes.'
    },
    {
      title: 'Ambientes Indoor',
      description: 'Cobertura para shopping centers, escritórios e grandes empreendimentos.'
    },
    {
      title: 'Eventos',
      description: 'Soluções temporárias ou permanentes para locais de eventos.'
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
              <Icon as={FaWifi} w={10} h={10} />
              <Heading as="h1" size="2xl">
                Instalação de Small Cell
              </Heading>
            </Flex>
            <Text fontSize="xl" maxW="700px">
              Soluções completas para instalação de small cells em ambientes diversos,
              garantindo cobertura e performance em áreas estratégicas.
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
                Nossa expertise em instalação de small cells abrange desde a análise inicial
                do local até a implementação e otimização final. Trabalhamos com as mais
                recentes tecnologias e métodos de instalação, garantindo cobertura eficiente
                e integração harmoniosa com o ambiente urbano.
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

            {/* Applications Section */}
            <VStack spacing={6} align="stretch" w="full">
              <Heading size="lg" color="rgba(42,82,118,1)">
                Aplicações
              </Heading>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
                {applications.map((app, index) => (
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
                        {app.title}
                      </Heading>
                      <Text color="gray.600">{app.description}</Text>
                    </VStack>
                  </MotionBox>
                ))}
              </SimpleGrid>
            </VStack>

            {/* Image Gallery */}
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} w="full">
              <Box
                h="300px"
                borderRadius="lg"
                overflow="hidden"
                shadow="xl"
              >
                <Image
                  src={infraestrutura1}
                  alt="Instalação de Small Cell em infraestrutura urbana"
                  w="100%"
                  h="100%"
                  objectFit="cover"
                  transition="transform 0.3s ease"
                  _hover={{ transform: 'scale(1.05)' }}
                />
              </Box>
              <Box
                h="300px"
                borderRadius="lg"
                overflow="hidden"
                shadow="xl"
              >
                <Image
                  src={infraestrutura2}
                  alt="Instalação de Small Cell em equipamento urbano"
                  w="100%"
                  h="100%"
                  objectFit="cover"
                  transition="transform 0.3s ease"
                  _hover={{ transform: 'scale(1.05)' }}
                />
              </Box>
            </SimpleGrid>

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
                  Pronto para melhorar sua cobertura?
                </Heading>
                <Text fontSize="lg" color="gray.600" maxW="700px">
                  Entre em contato conosco para discutir como nossas soluções de small cell
                  podem beneficiar seu projeto.
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

export default SmallCell;