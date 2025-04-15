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
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import { FaChartLine, FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import torre2 from '../../../assets/torre2.png';

const MotionBox = motion(Box);

const TechnicalConsulting = () => {
  const benefits = [
    'Análise técnica especializada',
    'Otimização de recursos',
    'Soluções personalizadas',
    'Expertise de mercado',
    'Suporte contínuo',
    'Inovação tecnológica'
  ];

  const services = [
    {
      title: 'Análise de Viabilidade',
      description: 'Estudos técnicos e econômicos para avaliar a viabilidade de projetos.'
    },
    {
      title: 'Projetos Executivos',
      description: 'Desenvolvimento de projetos detalhados para implementação.'
    },
    {
      title: 'Laudos Técnicos',
      description: 'Elaboração de laudos e relatórios técnicos especializados.'
    },
    {
      title: 'Otimização de Rede',
      description: 'Análise e melhorias para maximizar o desempenho da infraestrutura.'
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
              <Icon as={FaChartLine} w={10} h={10} />
              <Heading as="h1" size="2xl">
                Consultoria Técnica
              </Heading>
            </Flex>
            <Text fontSize="xl" maxW="700px">
              Consultoria especializada em projetos de telecomunicações,
              desde a concepção até a otimização.
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
                Nossa equipe de consultores técnicos oferece suporte especializado
                para otimizar seus projetos de telecomunicações. Com vasta experiência
                no setor, desenvolvemos soluções personalizadas que atendem às
                necessidades específicas de cada cliente.
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
                  Precisa de consultoria especializada?
                </Heading>
                <Text fontSize="lg" color="gray.600" maxW="700px">
                  Entre em contato para discutir seu projeto e descobrir como
                  nossa consultoria técnica pode ajudar a alcançar seus objetivos.
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

export default TechnicalConsulting;