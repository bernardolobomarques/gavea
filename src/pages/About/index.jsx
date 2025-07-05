import { Container, Heading, Text, VStack, Image, SimpleGrid, Box, Icon, Flex, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaUserShield, FaCalendarCheck, FaUserTie, FaThumbsUp, FaLightbulb, FaBuilding, FaSignal, FaHammer, FaNetworkWired, FaBuilding as FaBuildingIcon, FaLeaf } from 'react-icons/fa';
import logoGavea from '../../assets/logoGavea.png';
import torre2 from '../../assets/torre2.png';
import { useTranslation } from '../../hooks/useTranslation';

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

const ValueCard = ({ icon, title, description }) => {
  return (
    <MotionBox
      p={6}
      borderRadius="lg"
      bg="white"
      shadow="md"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      height="100%"
    >
      <VStack spacing={4} align="center">
        <Icon as={icon} w={8} h={8} color="rgba(42,82,118,1)" />
        <Heading size="md" textAlign="center" color="rgba(42,82,118,1)">
          {title}
        </Heading>
        <Text textAlign="center" color="gray.600">
          {description}
        </Text>
      </VStack>
    </MotionBox>
  );
};

const About = () => {
  const { t } = useTranslation();
  
  const activities = [
    {
      icon: FaCalendarCheck,
      title: t.about.activities.acquisition.title,
      description: t.about.activities.acquisition.description
    },
    {
      icon: FaHammer,
      title: t.about.activities.consulting.title,
      description: t.about.activities.consulting.description
    },
    {
      icon: FaBuilding,
      title: t.about.activities.infrastructure.title,
      description: t.about.activities.infrastructure.description
    },
    {
      icon: FaSignal,
      title: t.about.activities.smallCells.title,
      description: t.about.activities.smallCells.description
    }
  ];

  const values = [
    { 
      icon: FaUserShield, 
      title: t.about.values.excellence.title, 
      description: t.about.values.excellence.description 
    },
    { 
      icon: FaCalendarCheck, 
      title: t.about.values.integrity.title, 
      description: t.about.values.integrity.description 
    },
    { 
      icon: FaUserTie, 
      title: t.about.values.commitment.title, 
      description: t.about.values.commitment.description 
    },
    { 
      icon: FaThumbsUp, 
      title: t.about.values.innovation.title, 
      description: t.about.values.innovation.description 
    },
    { 
      icon: FaLightbulb, 
      title: "Inovação", 
      description: "Desenvolvemos soluções inteligentes e criativas para os desafios mais complexos do setor." 
    },
    { 
      icon: FaLeaf, 
      title: "Sustentabilidade", 
      description: "Comprometidos com práticas sustentáveis e respeito ao meio ambiente em todas as nossas operações." 
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
              <Icon as={FaBuildingIcon} w={10} h={10} />
              <Heading as="h1" size="2xl">
                {t.about.title}
              </Heading>
            </Flex>
            <Text fontSize="xl" maxW="700px">
              {t.about.subtitle}
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
                  {t.about.intro.description}
                </Text>
                <Text fontSize="lg" maxW="800px">
                  {t.about.mission.description}
                </Text>
              </VStack>

              {/* Nossas Atividades */}
              <VStack spacing={8} w="full">
                <Heading as="h3" size="lg" color="rgba(42,82,118,1)">{t.about.activities.title}</Heading>
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
              <VStack spacing={8} w="full">
                <Heading as="h3" size="lg" color="rgba(42,82,118,1)">{t.about.values.title}</Heading>
                <SimpleGrid 
                  columns={{ base: 1, md: 2 }} 
                  spacing={6}
                  w="full"
                  px={4}
                  maxW="1100px"
                  mx="auto"
                >
                  {values.map((value, index) => (
                    <MotionBox
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <ValueCard {...value} />
                    </MotionBox>
                  ))}
                </SimpleGrid>
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