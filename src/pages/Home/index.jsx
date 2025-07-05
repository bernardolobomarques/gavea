import { Box, Button, Container, Flex, Grid, Heading, Icon, Image, SimpleGrid, Stack, Stat, StatLabel, StatNumber, Text, VStack, useColorModeValue, FormControl, FormLabel, Input, Textarea, useToast } from '@chakra-ui/react';
import { FaBuilding, FaBroadcastTower, FaUserCheck, FaUsers, FaUserTie, FaClipboardCheck, FaWifi, FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaWhatsapp, FaArrowRight } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import torreHome from '../../assets/torreHome.png';
import torre1 from '../../assets/torre1.jpg';
import { useTranslation } from '../../hooks/useTranslation';

const useInView = (options = {}) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);

  return [ref, isInView];
};

const Feature = ({ title, text, icon }) => {
  return (
    <Stack
      align={'center'}
      textAlign={'center'}
      p={{ base: 6, md: 8 }}
      borderRadius="lg"
      bg={useColorModeValue('white', 'gray.800')}
      shadow="lg"
      transition="all 0.3s"
      _hover={{
        transform: 'translateY(-5px)',
        shadow: 'xl'
      }}
      spacing={4}
    >
      <Flex
        w={{ base: 12, md: 16 }}
        h={{ base: 12, md: 16 }}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'rgba(42,82,118,1)'}
        mb={1}
      >
        {icon}
      </Flex>
      <Text fontWeight={600} fontSize={{ base: 'md', md: 'lg' }}>{title}</Text>
      <Text color={'gray.600'} fontSize={{ base: 'sm', md: 'md' }}>{text}</Text>
    </Stack>
  );
};

const StatCard = ({ label, number }) => {
  const [ref, isInView] = useInView({ threshold: 0.2 });
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    let animationFrame;
    const duration = 2000; // 2 seconds
    const startTimestamp = performance.now();
    const startValue = 0;
    const endValue = parseInt(number);

    const animate = (currentTimestamp) => {
      const elapsed = currentTimestamp - startTimestamp;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuad = 1 - (1 - progress) * (1 - progress);
      const currentValue = Math.floor(startValue + (endValue - startValue) * easeOutQuad);
      
      setCount(currentValue);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setHasAnimated(true);
      }
    };

    if (isInView && !hasAnimated) {
      animationFrame = requestAnimationFrame(animate);
    }

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isInView, number, hasAnimated]);

  return (
    <Stat
      ref={ref}
      px={6}
      py={8}
      shadow={'xl'}
      bg="white"
      rounded={'lg'}
      textAlign="center"
      transition="all 0.3s"
      _hover={{
        transform: 'translateY(-5px)',
        shadow: '2xl'
      }}
    >
      <StatNumber fontSize={'4xl'} fontWeight={'bold'} color="gray.800">
        {count}+
      </StatNumber>
      <StatLabel fontSize={'lg'} fontWeight={'medium'} color="gray.700">
        {label}
      </StatLabel>
    </Stat>
  );
};

const ServiceCard = ({ icon, title, description, path }) => {
  return (
    <Box
      as={RouterLink}
      to={path}
      p={{ base: 6, md: 8 }}
      bg={useColorModeValue('white', 'gray.800')}
      borderRadius="lg"
      shadow="md"
      transition="all 0.3s"
      position="relative"
      _hover={{
        transform: 'translateY(-5px)',
        shadow: 'lg',
        textDecoration: 'none',
        '& > .arrow': {
          opacity: 1,
          transform: 'translateX(0)',
        }
      }}
      display="block"
    >
      <VStack spacing={4} align="flex-start">
        <Icon as={icon} w={{ base: 6, md: 8 }} h={{ base: 6, md: 8 }} color="rgba(42,82,118,1)" />
        <Heading size={{ base: 'sm', md: 'md' }}>{title}</Heading>
        <Text color="gray.600" fontSize={{ base: 'sm', md: 'md' }}>{description}</Text>
      </VStack>
      <Icon
        as={FaArrowRight}
        className="arrow"
        position="absolute"
        bottom={{ base: '6', md: '8' }}
        right={{ base: '6', md: '8' }}
        w={5}
        h={5}
        color="rgba(42,82,118,1)"
        opacity={0}
        transform="translateX(-10px)"
        transition="all 0.3s ease"
      />
    </Box>
  );
};

const ContactInfo = ({ icon, text }) => {
  return (
    <Flex align="center" gap={3}>
      <Icon as={icon} w={6} h={6} color="rgba(42,82,118,1)" />
      <Text fontSize="lg" color="gray.600">{text}</Text>
    </Flex>
  );
};

const Home = () => {
  const toast = useToast();
  const [scrollY, setScrollY] = useState(0);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      toast({
        title: t.home.contact.success,
        description: 'Entraremos em contato em breve.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: t.common.error,
        description: t.home.contact.error,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Box>
      {/* Hero Section */}
      <Box 
        pos="relative"
        h={{base: "auto", md: "100vh"}}
        minH="600px"
        overflow="hidden"
        isolation="isolate"
      >
        <Box
          pos="absolute"
          top="-20%"
          left={0}
          w="full"
          h="140%"
          bgImage={`url(${torreHome})`}
          bgPosition="center"
          bgSize="160%" 
          bgRepeat="no-repeat"
          transformOrigin="center"
          zIndex={-1}
          style={{
            transform: `scale(1.1) translateY(${scrollY * 0.15}px)`,
            transition: 'transform 0.1s ease-out',
            willChange: 'transform'
          }}
        />
        <Box
          pos="absolute"
          top={0}
          left={0}
          w="full"
          h="full"
          bg="rgba(42,82,118,0.75)"
          zIndex={0}
        />
        <Container maxW="1200px" h="full" pos="relative" zIndex={2}>
          <Flex
            direction="column"
            align="flex-start"
            justify="center"
            h="full"
            pt={{base: 20, md: 0}}
            pb={{base: 16, md: 0}}
          >
            <Heading 
              as="h1" 
              size="2xl"
              mb={6}
              maxW="800px"
              fontSize={{ base: "4xl", md: "6xl" }}
              fontWeight="bold"
              lineHeight="1.2"
              letterSpacing="tight"
              color="white"
            >
              {t.home.hero.title}
            </Heading>
            <Text
              fontSize={{ base: "xl", md: "2xl" }}
              mb={12}
              maxW="700px"
              lineHeight="1.6"
              color="white"
            >
              {t.home.hero.subtitle}
            </Text>
            <Stack direction={{base: 'column', sm: 'row'}} spacing={{ base: 4, md: 6 }} align={{ base: 'stretch', sm: 'center' }}>
              <Button
                as={RouterLink}
                to="/contact"
                size={{ base: 'md', md: 'lg' }}
                bg="white"
                color="rgba(42,82,118,1)"
                px={{ base: 6, md: 8 }}
                py={{ base: 4, md: 6 }}
                fontSize={{ base: 'md', md: 'lg' }}
                _hover={{
                  bg: 'gray.100',
                  transform: 'translateY(-2px)',
                }}
                transition="all 0.3s"
                w={{ base: 'full', sm: 'auto' }}
              >
                {t.home.hero.contact}
              </Button>
              <Button
                as={RouterLink}
                to="/services"
                size={{ base: 'md', md: 'lg' }}
                variant="outline"
                borderColor="white"
                borderWidth="2px"
                color="white"
                px={{ base: 6, md: 8 }}
                py={{ base: 4, md: 6 }}
                fontSize={{ base: 'md', md: 'lg' }}
                _hover={{
                  bg: 'whiteAlpha.200',
                  transform: 'translateY(-2px)',
                }}
                transition="all 0.3s"
                w={{ base: 'full', sm: 'auto' }}
              >
                {t.home.hero.cta}
              </Button>
              
              {/* WhatsApp Button */}
              <Button
                as="a"
                href={`https://wa.me/5521971984430?text=${encodeURIComponent(t.contact?.whatsapp?.introMessage || (t.isEnglish ? 'Hello! I saw your website and would like to know more about your telecommunications services.' : 'Olá! Vi seu site e gostaria de saber mais sobre seus serviços de telecomunicações.'))}`}
                target="_blank"
                rel="noopener noreferrer"
                size={{ base: 'md', md: 'lg' }}
                bg="green.500"
                color="white"
                leftIcon={<Icon as={FaWhatsapp} w={{ base: 4, md: 5 }} h={{ base: 4, md: 5 }} />}
                px={{ base: 6, md: 8 }}
                py={{ base: 4, md: 6 }}
                fontSize={{ base: 'md', md: 'lg' }}
                _hover={{
                  bg: 'green.600',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 25px rgba(34, 197, 94, 0.3)'
                }}
                transition="all 0.3s"
                borderRadius="full"
                boxShadow="0 4px 15px rgba(34, 197, 94, 0.2)"
                w={{ base: 'full', sm: 'auto' }}
              >
                WhatsApp
              </Button>
            </Stack>
          </Flex>
        </Container>
      </Box>

      {/* Features Section */}
      <Box py={{ base: 12, md: 20 }} bg={useColorModeValue('gray.50', 'gray.900')}>
        <Container maxW="1200px">
          <VStack spacing={{ base: 8, md: 12 }}>
            <Heading textAlign="center" fontSize={{ base: '2xl', md: '3xl' }}>{t.home.features.title}</Heading>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 6, md: 10 }}>
              <Feature
                icon={<Icon as={FaBuilding} w={{ base: 6, md: 8 }} h={{ base: 6, md: 8 }} />}
                title={t.home.features.expertise.title}
                text={t.home.features.expertise.description}
              />
              <Feature
                icon={<Icon as={FaUserCheck} w={{ base: 6, md: 8 }} h={{ base: 6, md: 8 }} />}
                title={t.home.features.quality.title}
                text={t.home.features.quality.description}
              />
              <Feature
                icon={<Icon as={FaUsers} w={{ base: 6, md: 8 }} h={{ base: 6, md: 8 }} />}
                title={t.home.features.support.title}
                text={t.home.features.support.description}
              />
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* Stats Section */}
      <Box py={{ base: 12, md: 20 }} bg={useColorModeValue('gray.300', 'gray.800')}>
        <Container maxW="1200px">
          <VStack spacing={{ base: 8, md: 12 }}>
            <Heading color="gray.800" textAlign="center" fontSize={{ base: '2xl', md: '3xl' }}>{t.homePageContent.statsSection.title}</Heading>
            <Grid
              templateColumns={{ base: '1fr', sm: 'repeat(3, 1fr)' }}
              gap={{ base: 4, md: 8 }}
              w="full"
            >
              <StatCard label={t.home.stats.projectsLabel} number={t.home.stats.projectsNumber} />
              <StatCard label={t.home.stats.clientsLabel} number={t.home.stats.clientsNumber} />
              <StatCard label={t.home.stats.experienceLabel} number={t.home.stats.experienceNumber} />
            </Grid>
          </VStack>
        </Container>
      </Box>

      {/* Services Section */}
      <Box py={{ base: 12, md: 20 }} bg={useColorModeValue('white', 'gray.900')}>
        <Container maxW="1200px">
          <VStack spacing={{ base: 8, md: 12 }}>
            <VStack spacing={4}>
              <Heading textAlign="center" fontSize={{ base: '2xl', md: '3xl' }}>{t.services.title}</Heading>
              <Text 
                textAlign="center" 
                fontSize={{ base: 'md', md: 'lg' }} 
                color="gray.600" 
                maxW="700px"
                px={{ base: 4, md: 0 }}
              >
                {t.homePageContent.servicesSection.description}
              </Text>
            </VStack>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 6, md: 8 }} w="full">
              <ServiceCard
                icon={FaUserTie}
                title={t.homePageContent.servicesSection.technicalConsulting.title}
                description={t.homePageContent.servicesSection.technicalConsulting.description}
                path="/services/technical-consulting"
              />
              <ServiceCard
                icon={FaClipboardCheck}
                title={t.homePageContent.servicesSection.licensing.title}
                description={t.homePageContent.servicesSection.licensing.description}
                path="/services/licensing"
              />
              <ServiceCard
                icon={FaWifi}
                title={t.homePageContent.servicesSection.smallCell.title}
                description={t.homePageContent.servicesSection.smallCell.description}
                path="/services/small-cell"
              />
              <ServiceCard
                icon={FaBroadcastTower}
                title={t.homePageContent.servicesSection.sitesConstruction.title}
                description={t.homePageContent.servicesSection.sitesConstruction.description}
                path="/services/sites-construction"
              />
            </SimpleGrid>
            <Button
              as={RouterLink}
              to="/services"
              size={{ base: 'md', md: 'lg' }}
              bg="rgba(42,82,118,1)"
              color="white"
              px={8}
              _hover={{
                bg: 'rgba(42,82,118,0.9)',
                transform: 'translateY(-2px)'
              }}
              transition="all 0.3s"
              leftIcon={<FaArrowRight />}
            >
              {t.homePageContent.servicesSection.viewAllServices}
            </Button>
          </VStack>
        </Container>
      </Box>

      {/* About Section */}
      <Box py={20} bg={useColorModeValue('gray.300', 'gray.800')}>
        <Container maxW="1200px">
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={16} alignItems="center">
            <VStack spacing={6} align="flex-start">
              <Heading color="gray.800">{t.homePageContent.aboutSection.title}</Heading>
              <Text fontSize="lg" color="gray.700">
                {t.homePageContent.aboutSection.description1}
              </Text>
              <Text fontSize="lg" color="gray.700">
                {t.homePageContent.aboutSection.description2}
              </Text>
              <Button
                as={RouterLink}
                to="/about"
                size="lg"
                bg="rgba(42,82,118,1)"
                color="white"
                _hover={{
                  bg: 'rgba(42,82,118,0.9)'
                }}
              >
                {t.homePageContent.aboutSection.learnMore}
              </Button>
            </VStack>
            <Box 
              bg="white" 
              p={4}
              borderRadius="xl"
              shadow="xl"
              height="500px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              overflow="hidden"
              position="relative"
              _after={{
                content: '""',
                position: 'absolute',
                top: '0',
                left: '0',
                right: '0',
                bottom: '0',
                borderRadius: 'xl',
                border: '1px solid',
                borderColor: 'gray.100'
              }}
            >
              <Image
                src={torre1}
                alt="Torre de Telecomunicações Gávea"
                w="100%"
                h="100%"
                objectFit="cover"
                objectPosition="65% center"
                borderRadius="lg"
                transition="all 0.3s ease"
                _hover={{
                  transform: 'scale(1.02)'
                }}
              />
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box py={20} bg="white">
        <Container maxW="1200px">
          <VStack spacing={12}>
            <VStack spacing={4}>
              <Heading textAlign="center">{t.homePageContent.contactSection.title}</Heading>
              <Text textAlign="center" fontSize="lg" color="gray.600" maxW="700px">
                {t.homePageContent.contactSection.subtitle}
              </Text>
            </VStack>

            <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={12} w="full">
              {/* Contact Info */}
              <VStack spacing={6} align="flex-start">
                <VStack spacing={4} align="stretch" w="full">
                  <ContactInfo
                    icon={FaPhone}
                    text={t.homePageContent.contactInfo.phone}
                  />
                  <ContactInfo
                    icon={FaEnvelope}
                    text={t.homePageContent.contactInfo.email}
                  />
                  <ContactInfo
                    icon={FaMapMarkerAlt}
                    text={t.homePageContent.contactInfo.address}
                  />
                  <ContactInfo
                    icon={FaClock}
                    text={t.homePageContent.contactInfo.hours}
                  />
                </VStack>

                <Box w="100%" h="300px" borderRadius="lg" overflow="hidden" shadow="lg">
                  <iframe
                    src="https://maps.google.com/maps?q=Av.%20Érico%20Veríssimo%20855,%20sala%20301%20Barra%20da%20Tijuca%20Rio%20de%20Janeiro&t=m&z=18&output=embed&iwloc=near"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localização Gávea Telecomunicações"
                  />
                </Box>

                <Button
                  as="a"
                  href={`https://wa.me/5521971984430?text=${encodeURIComponent(t.homePageContent.contactInfo.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="lg"
                  colorScheme="whatsapp"
                  leftIcon={<FaWhatsapp />}
                  w={{ base: 'full', md: 'auto' }}
                >
                  {t.homePageContent.contactInfo.whatsappButton}
                </Button>
              </VStack>

              {/* Quick Contact Form */}
              <Box
                as="form"
                onSubmit={handleSubmit}
                bg={useColorModeValue('gray.50', 'gray.900')}
                p={8}
                borderRadius="lg"
                shadow="lg"
              >
                <VStack spacing={4}>
                  <FormControl isRequired>
                    <FormLabel color="rgba(42,82,118,1)">{t.homePageContent.contactForm.name}</FormLabel>
                    <Input 
                      placeholder={t.homePageContent.contactForm.namePlaceholder}
                      bg="white"
                      borderColor="rgba(42,82,118,0.4)"
                      _hover={{ borderColor: "rgba(42,82,118,0.6)" }}
                    />
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel color="rgba(42,82,118,1)">{t.homePageContent.contactForm.email}</FormLabel>
                    <Input 
                      type="email"
                      placeholder={t.homePageContent.contactForm.emailPlaceholder}
                      bg="white"
                      borderColor="rgba(42,82,118,0.4)"
                      _hover={{ borderColor: "rgba(42,82,118,0.6)" }}
                    />
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel color="rgba(42,82,118,1)">{t.homePageContent.contactForm.subject}</FormLabel>
                    <Input 
                      placeholder={t.homePageContent.contactForm.subjectPlaceholder}
                      bg="white"
                      borderColor="rgba(42,82,118,0.4)"
                      _hover={{ borderColor: "rgba(42,82,118,0.6)" }}
                    />
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel color="rgba(42,82,118,1)">{t.homePageContent.contactForm.message}</FormLabel>
                    <Textarea 
                      placeholder={t.homePageContent.contactForm.messagePlaceholder}
                      rows={4}
                      bg="white"
                      borderColor="rgba(42,82,118,0.4)"
                      _hover={{ borderColor: "rgba(42,82,118,0.6)" }}
                    />
                  </FormControl>

                  <Button
                    type="submit"
                    bg="rgba(42,82,118,1)"
                    color="white"
                    size="lg"
                    w="full"
                    _hover={{ bg: "rgba(42,82,118,0.9)" }}
                    mt={4}
                  >
                    {t.homePageContent.contactForm.send}
                  </Button>
                </VStack>
              </Box>
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;