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
import { useTranslation } from '../../../hooks/useTranslation';

const MotionBox = motion(Box);

const SmallCell = () => {
  const { t } = useTranslation();
  
  const benefits = t.servicePages.smallCell.benefits.items;

  const applications = [
    {
      title: t.servicePages.smallCell.applications.urban.title,
      description: t.servicePages.smallCell.applications.urban.description
    },
    {
      title: t.servicePages.smallCell.applications.equipment.title,
      description: t.servicePages.smallCell.applications.equipment.description
    },
    {
      title: t.servicePages.smallCell.applications.indoor.title,
      description: t.servicePages.smallCell.applications.indoor.description
    },
    {
      title: t.servicePages.smallCell.applications.events.title,
      description: t.servicePages.smallCell.applications.events.description
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
                {t.servicePages.smallCell.title}
              </Heading>
            </Flex>
            <Text fontSize="xl" maxW="700px">
              {t.servicePages.smallCell.subtitle}
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
                {t.servicePages.smallCell.overview}
              </Heading>
              <Text fontSize="lg" color="gray.600">
                {t.servicePages.smallCell.description}
              </Text>
            </VStack>

            {/* Benefits Section */}
            <VStack spacing={6} align="stretch" w="full">
              <Heading size="lg" color="rgba(42,82,118,1)">
                {t.servicePages.smallCell.benefits.title}
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
                {t.servicePages.smallCell.applications.title}
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
                  {t.servicePages.smallCell.cta.title}
                </Heading>
                <Text fontSize="lg" color="gray.600" maxW="700px">
                  {t.servicePages.smallCell.cta.description}
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
                  {t.servicePages.smallCell.cta.button}
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