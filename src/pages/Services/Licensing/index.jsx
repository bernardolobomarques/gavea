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
import { FaFileContract, FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import { useTranslation } from '../../../hooks/useTranslation';
import torre2 from '../../../assets/torre2.png';

const MotionBox = motion(Box);

const Licensing = () => {
  const { t } = useTranslation();

  const benefits = t.servicePages.licensing.benefits.items;
  
  const services = [
    {
      title: t.servicePages.licensing.services.municipal.title,
      description: t.servicePages.licensing.services.municipal.description
    },
    {
      title: t.servicePages.licensing.services.environmental.title,
      description: t.servicePages.licensing.services.environmental.description
    },
    {
      title: t.servicePages.licensing.services.regularization.title,
      description: t.servicePages.licensing.services.regularization.description
    },
    {
      title: t.servicePages.licensing.services.processManagement.title,
      description: t.servicePages.licensing.services.processManagement.description
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
              <Icon as={FaFileContract} w={10} h={10} />
              <Heading as="h1" size="2xl">
                {t.servicePages.licensing.heroTitle}
              </Heading>
            </Flex>
            <Text fontSize="xl" maxW="700px">
              {t.servicePages.licensing.heroSubtitle}
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
                {t.servicePages.licensing.overview.title}
              </Heading>
              <Text fontSize="lg" color="gray.600">
                {t.servicePages.licensing.overview.description}
              </Text>
            </VStack>

            {/* Benefits Section */}
            <VStack spacing={6} align="stretch" w="full">
              <Heading size="lg" color="rgba(42,82,118,1)">
                {t.servicePages.licensing.benefits.title}
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
                {t.servicePages.licensing.services.title}
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
                  {t.servicePages.licensing.cta.title}
                </Heading>
                <Text fontSize="lg" color="gray.600" maxW="700px">
                  {t.servicePages.licensing.cta.description}
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
                  {t.servicePages.licensing.cta.button}
                </Button>
              </VStack>
            </Box>
          </VStack>
        </Container>
      </Box>
    </Box>
  );
};

export default Licensing;