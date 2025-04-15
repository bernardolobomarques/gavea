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
import { FaBroadcastTower, FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import torre2 from '../../../assets/torre2.png';
import greenfield2 from '../../../assets/greenfield2.jpeg';
import rooftop2 from '../../../assets/rooftop2.jpg';
import rooftop3 from '../../../assets/rooftop3.jpeg';
import starlink1 from '../../../assets/starlink1.jpg';

const MotionBox = motion(Box);

const SitesConstruction = () => {
  const benefits = [
    'Expertise em diferentes tipos de sites',
    'Conformidade com normas técnicas',
    'Equipe altamente qualificada',
    'Gestão completa do projeto',
    'Soluções personalizadas',
    'Tecnologia de ponta'
  ];

  const applications = [
    {
      title: 'Greenfield',
      description: 'Construção completa de sites em terrenos novos, incluindo fundação e infraestrutura.'
    },
    {
      title: 'Rooftop',
      description: 'Instalação de sites em coberturas de edifícios com adaptações estruturais.'
    },
    {
      title: 'Sites Indoor',
      description: 'Implementação de sistemas de cobertura interna em grandes empreendimentos.'
    },
    {
      title: 'Street Sites',
      description: 'Soluções urbanas integradas com mobiliário urbano e postes.'
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
              <Icon as={FaBroadcastTower} w={10} h={10} />
              <Heading as="h1" size="2xl">
                Construção de Sites
              </Heading>
            </Flex>
            <Text fontSize="xl" maxW="700px">
              Soluções completas para construção de sites de telecomunicações,
              desde o projeto até a implementação final.
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
                Nossa experiência em construção de sites abrange todos os tipos de implementações,
                desde sites greenfield até soluções indoor complexas. Garantimos qualidade e
                conformidade em cada etapa do projeto, com foco na eficiência e durabilidade.
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
                Tipos de Sites
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

            {/* Project Gallery */}
            <VStack spacing={6} align="stretch" w="full">
              <Heading size="lg" color="rgba(42,82,118,1)">
                Nossos Projetos
              </Heading>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
                <Box
                  h="400px"
                  borderRadius="lg"
                  overflow="hidden"
                  shadow="xl"
                >
                  <Image
                    src={greenfield2}
                    alt="Construção de site Greenfield"
                    w="100%"
                    h="100%"
                    objectFit="cover"
                    transition="transform 0.3s ease"
                    _hover={{ transform: 'scale(1.05)' }}
                  />
                </Box>
                <Box
                  h="400px"
                  borderRadius="lg"
                  overflow="hidden"
                  shadow="xl"
                >
                  <Image
                    src={starlink1}
                    alt="Site em Rooftop"
                    w="100%"
                    h="100%"
                    objectFit="cover"
                    transition="transform 0.3s ease"
                    _hover={{ transform: 'scale(1.05)' }}
                  />
                </Box>
              </SimpleGrid>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
                <Box
                  h="300px"
                  borderRadius="lg"
                  overflow="hidden"
                  shadow="xl"
                >
                  <Image
                    src={rooftop2}
                    alt="Implementação em Rooftop"
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
                    src={rooftop3}
                    alt="Construção em Rooftop"
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
                  Pronto para construir seu site?
                </Heading>
                <Text fontSize="lg" color="gray.600" maxW="700px">
                  Entre em contato conosco para discutir seu projeto de construção
                  de site e descobrir a melhor solução para suas necessidades.
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

export default SitesConstruction;