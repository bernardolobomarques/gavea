import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Text,
  VStack,
  Icon,
  useColorModeValue,
  Button,
  Flex,
  Image,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import {
  FaWifi,
  FaNetworkWired,
  FaToolbox,
  FaSearchLocation,
  FaClipboardCheck,
  FaFileContract,
  FaChartLine,
  FaTools,
  FaServer,
  FaBuilding,
  FaSignal,
  FaBroadcastTower,
  FaArrowRight,
} from 'react-icons/fa';
import torre2 from '../../assets/torre2.png';
import { useTranslation } from '../../hooks/useTranslation';

const MotionBox = motion(Box);

const ServiceCard = ({ icon, title, description, features, path }) => {
  return (
    <MotionBox
      p={8}
      bg={useColorModeValue('white', 'gray.800')}
      borderRadius="lg"
      shadow="lg"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      position="relative"
      as={RouterLink}
      to={path}
      _hover={{
        textDecoration: 'none',
        '& > .arrow': {
          opacity: 1,
          transform: 'translateX(0)',
        }
      }}
    >
      <VStack spacing={6} align="flex-start" height="100%">
        <Flex
          w={16}
          h={16}
          align="center"
          justify="center"
          color="white"
          rounded="full"
          bg="rgba(42,82,118,1)"
          mb={1}
        >
          <Icon as={icon} w={8} h={8} />
        </Flex>
        <Heading size="md">{title}</Heading>
        <Text color="gray.600">{description}</Text>
        {features && (
          <VStack align="flex-start" spacing={2} mt={4} flex="1">
            {features.map((feature, index) => (
              <Flex key={index} align="center" gap={2}>
                <Box w={1} h={1} bg="rgba(42,82,118,1)" borderRadius="full" />
                <Text color="gray.600">{feature}</Text>
              </Flex>
            ))}
          </VStack>
        )}
      </VStack>
      <Icon
        as={FaArrowRight}
        className="arrow"
        position="absolute"
        bottom="8"
        right="8"
        w={5}
        h={5}
        color="rgba(42,82,118,1)"
        opacity={0}
        transform="translateX(-10px)"
        transition="all 0.3s ease"
      />
    </MotionBox>
  );
};

const Services = () => {
  const { t } = useTranslation();
  
  const services = [
    {
      icon: FaWifi,
      title: t.services.smallCell,
      description: t.servicePages.smallCell.description,
      features: [
        'Instalação em equipamentos urbanos',
        'Implementação em fachadas',
        'Cobertura indoor',
        'Otimização de rede',
      ],
      path: '/services/small-cell'
    },
    {
      icon: FaBroadcastTower,
      title: t.services.sitesConstruction,
      description: t.servicePages.sitesConstruction.description,
      features: [
        'Sites Greenfield',
        'Rooftop',
        'Sites Indoor',
        'Street Sites',
      ],
      path: '/services/sites-construction'
    },
    {
      icon: FaSearchLocation,
      title: t.services.locationAcquisition,
      description: t.servicePages.locationAcquisition.description,
      features: [
        'Análise de viabilidade',
        'Negociação com proprietários',
        'Avaliação técnica',
        'Due diligence',
      ],
      path: '/services/location-acquisition'
    },
    {
      icon: FaFileContract,
      title: t.services.licensing,
      description: t.servicePages.licensing.description,
      features: [
        'Licenças municipais',
        'Aprovações ambientais',
        'Documentação técnica',
        'Gestão de processos',
      ],
      path: '/services/licensing'
    },
    {
      icon: FaTools,
      title: t.services.maintenance,
      description: t.servicePages.maintenance.description,
      features: [
        'Manutenção preventiva',
        'Correção de falhas',
        'Upgrade de equipamentos',
        'Monitoramento 24/7',
      ],
      path: '/services/maintenance'
    },
    {
      icon: FaChartLine,
      title: t.services.technicalConsulting,
      description: t.servicePages.technicalConsulting.description,
      features: [
        'Análise de viabilidade',
        'Projetos executivos',
        'Laudos técnicos',
        'Otimização de rede',
      ],
      path: '/services/technical-consulting'
    },
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
            <Heading 
              as="h1" 
              size="2xl"
              maxW="800px"
            >
              {t.services.title}
            </Heading>
            <Text fontSize="xl" maxW="700px">
              Oferecemos soluções completas em infraestrutura de telecomunicações, desde a aquisição e licenciamento até a implementação e manutenção.
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* Main Content */}
      <Box py={20} bg={useColorModeValue('gray.50', 'gray.900')}>
        <Container maxW="1200px">
          <VStack spacing={16}>
            {/* Services Grid */}
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} w="full">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </SimpleGrid>

            {/* Call to Action */}
            <Box textAlign="center" py={10}>
              <VStack spacing={6}>
                <Heading size="lg" color="rgba(42,82,118,1)">
                  Pronto para começar seu projeto?
                </Heading>
                <Text fontSize="lg" color="gray.600" maxW="700px">
                  Entre em contato conosco para discutir suas necessidades e descobrir como podemos ajudar no seu projeto de telecomunicações.
                </Text>
                <Button
                  as={RouterLink}
                  to="/contact"
                  size="lg"
                  bg="rgba(42,82,118,1)"
                  color="white"
                  px={8}
                  _hover={{
                    bg: 'rgba(42,82,118,0.9)',
                    transform: 'translateY(-2px)',
                  }}
                  transition="all 0.3s"
                >
                  {t.home.hero.contact}
                </Button>
              </VStack>
            </Box>
          </VStack>
        </Container>
      </Box>
    </Box>
  );
};

export default Services;