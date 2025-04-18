import { Container, Heading, Text, VStack, Image, SimpleGrid, Box, Icon, Flex, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaUserShield, FaCalendarCheck, FaUserTie, FaThumbsUp, FaLightbulb, FaBuilding, FaSignal, FaHammer, FaNetworkWired, FaBuilding as FaBuildingIcon, FaLeaf } from 'react-icons/fa';
import logoGavea from '../../assets/logoGavea.png';
import torre2 from '../../assets/torre2.png';

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

const ActivityCard = ({ icon, title, description }) => {
  return (
    <MotionBox
      p={8}
      bg={useColorModeValue('white', 'gray.800')}
      borderRadius="lg"
      shadow="md"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      height="100%"
      display="flex"
      alignItems="stretch"
    >
      <VStack spacing={6} flex="1" justify="center">
        <Icon as={icon} w={12} h={12} color="rgba(42,82,118,1)" />
        <Heading size="md" textAlign="center">{title}</Heading>
        <Text textAlign="center" color="gray.600">{description}</Text>
      </VStack>
    </MotionBox>
  );
};

const ValueCard = ({ icon, text }) => {
  return (
    <MotionFlex
      align="center"
      p={4}
      borderRadius="md"
      bg="white"
      shadow="sm"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      <Icon as={icon} w={6} h={6} color="rgba(42,82,118,1)" mr={3} />
      <Text color="gray.700">{text}</Text>
    </MotionFlex>
  );
};

const About = () => {
  const activities = [
    {
      icon: FaBuilding,
      title: "Construção de Estações e Redes",
      description: "Desenvolvemos projetos robustos para garantir conectividade em áreas urbanas e rurais."
    },
    {
      icon: FaCalendarCheck,
      title: "Aquisição e Licenciamento",
      description: "Identificamos locais estratégicos para expandir nossa rede."
    },
    {
      icon: FaSignal,
      title: "Diversos Tipos de Sites",
      description: "Desde Greenfield até Rooftop, passando por Biosite, Small Cell, Street Site, Indoor e Outdoor."
    },
    {
      icon: FaHammer,
      title: "Engenharia Especializada",
      description: "Nossa equipe oferece projetos executivos, estruturais e laudos técnicos."
    }
  ];

  const values = [
    { icon: FaUserShield, text: "Segurança: Priorizamos a integridade de todos." },
    { icon: FaCalendarCheck, text: "Integridade: Agimos com ética e transparência." },
    { icon: FaUserTie, text: "Profissionalismo: Oferecemos soluções de alto padrão." },
    { icon: FaThumbsUp, text: "Qualidade: Buscamos a excelência em cada projeto." },
    { icon: FaLightbulb, text: "Inovação: Desenvolvemos soluções inteligentes." },
    { icon: FaLeaf, text: "Respeito ao meio ambiente: Comprometidos com a sustentabilidade." }
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
              <Icon as={FaBuildingIcon} w={10} h={10} />
              <Heading as="h1" size="2xl">
                Sobre Nós
              </Heading>
            </Flex>
            <Text fontSize="xl" maxW="700px">
              Fundada em 2013, somos líderes em infraestrutura de telecomunicações,
              com mais de 1000 projetos realizados em todo o Brasil.
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* Main Content */}
      <Box py={20} bg={useColorModeValue('gray.50', 'gray.900')}>
        <Container maxW="1200px">
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <VStack spacing={16}>
              {/* Overview Section */}
              <VStack spacing={6} textAlign="center">
                <Text fontSize="lg" maxW="800px">
                  Fundada em 20 de fevereiro de 2013, a Gávea Telecomunicações é uma empresa líder no setor de telecomunicações, 
                  com sede na Barra da Tijuca, Rio de Janeiro – RJ. Nosso compromisso é construir e manter infraestruturas de 
                  comunicação confiáveis, conectando pessoas e empresas em todo o Brasil.
                </Text>
                <Text fontSize="lg" maxW="800px">
                  Com mais de 1000 projetos realizados, nossa experiência abrange desde a construção de estações e redes de 
                  telecomunicações até a manutenção de infraestrutura de sites. Cada projeto é um marco em nossa jornada de 
                  conectar o futuro.
                </Text>
              </VStack>

              {/* Nossas Atividades */}
              <VStack spacing={8} w="full">
                <Heading as="h3" size="lg" color="rgba(42,82,118,1)">Nossas atividades</Heading>
                <SimpleGrid 
                  columns={{ base: 1, md: 2 }} 
                  spacing={8} 
                  w="full"
                  px={4}
                  maxW="1100px"
                  mx="auto"
                >
                  {activities.map((activity, index) => (
                    <MotionBox
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      height="100%"
                    >
                      <ActivityCard {...activity} />
                    </MotionBox>
                  ))}
                </SimpleGrid>
              </VStack>

              {/* Colaboradores */}
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} w="full" alignItems="center">
                <MotionBox
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <VStack align="flex-start" spacing={4}>
                    <Heading size="lg" color="rgba(42,82,118,1)">Colaboradores Valorizados</Heading>
                    <Text fontSize="lg" color="gray.600">
                      Contamos com gestores, engenheiros, técnicos, supervisores de campo e mão de obra especializada. 
                      Nossas parcerias com outras empresas fortalecem nossa missão.
                    </Text>
                  </VStack>
                </MotionBox>
                <MotionBox
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image 
                    src="https://gaveatelecom.com/wp-content/uploads/2024/05/eng-std.webp" 
                    alt="Colaboradores Gávea"
                    borderRadius="lg"
                    shadow="xl"
                  />
                </MotionBox>
              </SimpleGrid>

              {/* Nossos Valores */}
              <VStack spacing={8}>
                <Heading as="h3" size="lg" color="rgba(42,82,118,1)">Nossos valores</Heading>
                <VStack spacing={4} w="full">
                  {values.map((value, index) => (
                    <MotionBox
                      key={index}
                      w="full"
                      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <ValueCard {...value} />
                    </MotionBox>
                  ))}
                </VStack>
              </VStack>

              {/* Chamada Final */}
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                textAlign="center"
              >
                <Text fontSize="xl" color="rgba(42,82,118,1)" fontWeight="bold">
                  Junte-se à Gávea em nossa jornada de conectar o futuro com confiança e sustentabilidade!
                </Text>
              </MotionBox>
            </VStack>
          </MotionBox>
        </Container>
      </Box>
    </Box>
  );
};

export default About;