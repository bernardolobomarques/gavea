import { Box, Button, Container, Flex, Grid, Heading, Icon, Image, SimpleGrid, Stack, Stat, StatLabel, StatNumber, Text, VStack, useColorModeValue, FormControl, FormLabel, Input, Textarea, useToast } from '@chakra-ui/react';
import { FaBuilding, FaBroadcastTower, FaUserCheck, FaUsers, FaUserTie, FaClipboardCheck, FaWifi, FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaWhatsapp, FaArrowRight } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import torreHome from '../../assets/torreHome.png';
import torre1 from '../../assets/torre1.jpg';

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
      p={8}
      borderRadius="lg"
      bg={useColorModeValue('white', 'gray.800')}
      shadow="lg"
      transition="all 0.3s"
      _hover={{
        transform: 'translateY(-5px)',
        shadow: 'xl'
      }}
    >
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'rgba(42,82,118,1)'}
        mb={1}
      >
        {icon}
      </Flex>
      <Text fontWeight={600} fontSize="lg">{title}</Text>
      <Text color={'gray.600'}>{text}</Text>
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
      p={8}
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
        <Icon as={icon} w={8} h={8} color="rgba(42,82,118,1)" />
        <Heading size="md">{title}</Heading>
        <Text color="gray.600">{description}</Text>
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
        title: 'Mensagem enviada!',
        description: 'Entraremos em contato em breve.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: 'Erro',
        description: 'Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.',
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
              Referencia em infraestrutura e comunicações
            </Heading>
            <Text
              fontSize={{ base: "xl", md: "2xl" }}
              mb={12}
              maxW="700px"
              lineHeight="1.6"
              color="white"
            >
              A Gávea foca nos serviços de construção civil e elétrica com larga experiência em sites Indoor, roof top e instalação de small cell's em equipamentos urbanos e fachadas, inclusive desenvolvimento de soluções, aquisição e licenciamento.
            </Text>
            <Stack direction={{base: 'column', sm: 'row'}} spacing={6}>
              <Button
                as={RouterLink}
                to="/contact"
                size="lg"
                bg="white"
                color="rgba(42,82,118,1)"
                px={8}
                py={6}
                fontSize="lg"
                _hover={{
                  bg: 'gray.100',
                  transform: 'translateY(-2px)',
                }}
                transition="all 0.3s"
              >
                Entre em contato
              </Button>
              <Button
                as={RouterLink}
                to="/services"
                size="lg"
                variant="outline"
                borderColor="white"
                borderWidth="2px"
                px={8}
                py={6}
                fontSize="lg"
                _hover={{
                  bg: 'whiteAlpha.200',
                  transform: 'translateY(-2px)',
                }}
                transition="all 0.3s"
              >
                Nossos Serviços
              </Button>
            </Stack>
          </Flex>
        </Container>
      </Box>

      {/* Features Section */}
      <Box py={20} bg={useColorModeValue('gray.50', 'gray.900')}>
        <Container maxW="1200px">
          <VStack spacing={12}>
            <Heading textAlign="center">Nossos diferenciais</Heading>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
              <Feature
                icon={<Icon as={FaBuilding} w={8} h={8} />}
                title={'Aquisição'}
                text={'Nossa empresa possui profissionais especializados em aquisição de imóveis para ERBs dos mais variados tipos.'}
              />
              <Feature
                icon={<Icon as={FaUserCheck} w={8} h={8} />}
                title={'Soluções Especializadas'}
                text={'Desenvolvemos soluções adaptadas nos mais diversos ambientes/locais como monumentos e edificações protegidas.'}
              />
              <Feature
                icon={<Icon as={FaUsers} w={8} h={8} />}
                title={'Integração Entre Áreas'}
                text={'Nosso corpo técnico tem profissionais de diversas áreas com expertise nas necessidades das mais variadas etapas.'}
              />
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* Stats Section */}
      <Box py={20} bg={useColorModeValue('gray.300', 'gray.800')}>
        <Container maxW="1200px">
          <VStack spacing={12}>
            <Heading color="gray.800" textAlign="center">Nossos números</Heading>
            <Grid
              templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}
              gap={8}
            >
              <StatCard label="Small cell's instaladas" number="400" />
              <StatCard label="Sites Executados" number="1000" />
              <StatCard label="Anos no mercado" number="20" />
            </Grid>
          </VStack>
        </Container>
      </Box>

      {/* Services Section */}
      <Box py={20} bg={useColorModeValue('white', 'gray.900')}>
        <Container maxW="1200px">
          <VStack spacing={12}>
            <VStack spacing={4}>
              <Heading textAlign="center">Nossos serviços</Heading>
              <Text textAlign="center" fontSize="lg" color="gray.600" maxW="700px">
                Oferecemos uma gama completa de serviços especializados em infraestrutura de telecomunicações
              </Text>
            </VStack>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
              <ServiceCard
                icon={FaUserTie}
                title="Consultoria Técnica"
                description="Consultoria técnica para projetos de telecomunicações, com foco em soluções personalizadas para cada cliente."
                path="/services/technical-consulting"
              />
              <ServiceCard
                icon={FaClipboardCheck}
                title="Licenciamento & Busca"
                description="Suporte completo em processos de licenciamento e busca e negociação de locais para implementação de infraestrutura."
                path="/services/licensing"
              />
              <ServiceCard
                icon={FaWifi}
                title="Instalação de Small Cell"
                description="Instalação profissional de small cells em diversos ambientes, garantindo cobertura e performance."
                path="/services/small-cell"
              />
              <ServiceCard
                icon={FaBroadcastTower}
                title="Construção de Sites"
                description="Execução completa de sites de telecomunicações, desde o projeto até a implementação final."
                path="/services/sites-construction"
              />
            </SimpleGrid>
            <Button
              as={RouterLink}
              to="/services"
              size="lg"
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
              Ver todos os serviços
            </Button>
          </VStack>
        </Container>
      </Box>

      {/* About Section */}
      <Box py={20} bg={useColorModeValue('gray.300', 'gray.800')}>
        <Container maxW="1200px">
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={16} alignItems="center">
            <VStack spacing={6} align="flex-start">
              <Heading color="gray.800">Sobre nós</Heading>
              <Text fontSize="lg" color="gray.700">
                Com atuação no mercado de telecomunicações a Gávea foca nos serviços de construção civil e elétrica com larga experiência em sites Indoor, roof top e instalação de small cell's em equipamentos urbanos e fachadas, inclusive desenvolvimento de soluções, aquisição e licenciamento.
              </Text>
              <Text fontSize="lg" color="gray.700">
                Construindo para empresas Sharing ou diretamente para operadoras, executamos mais de 800 sites de todos os tipos e instalamos mais de 400 small cell's, serviços técnicos complementares de telecomunicações tais como investigação de espectro, drive test e elaboração de laudos radiométricos, tudo executado com equipamentos próprios.
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
                Saiba mais
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
              <Heading textAlign="center">Entre em Contato</Heading>
              <Text textAlign="center" fontSize="lg" color="gray.600" maxW="700px">
                Estamos prontos para atender suas necessidades e desenvolver a melhor solução para seu projeto
              </Text>
            </VStack>

            <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={12} w="full">
              {/* Contact Info */}
              <VStack spacing={6} align="flex-start">
                <VStack spacing={4} align="stretch" w="full">
                  <ContactInfo
                    icon={FaPhone}
                    text="(21) 97198-4430"
                  />
                  <ContactInfo
                    icon={FaEnvelope}
                    text="contato@gaveatelecomunicacoes.com"
                  />
                  <ContactInfo
                    icon={FaMapMarkerAlt}
                    text="Avenida Presidente Vargas 590/1309, Rio de Janeiro"
                  />
                  <ContactInfo
                    icon={FaClock}
                    text="Segunda - Sexta 9:00 - 17:00"
                  />
                </VStack>

                <Box w="100%" h="300px" borderRadius="lg" overflow="hidden" shadow="lg">
                  <iframe
                    src="https://maps.google.com/maps?q=Avenida%20Presidente%20Vargas%20590%201309%2C%20Rio%20de%20Janeiro&t=m&z=18&output=embed&iwloc=near"
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
                  href={`https://wa.me/5521971984430?text=${encodeURIComponent('Olá! Gostaria de entrar em contato.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="lg"
                  colorScheme="whatsapp"
                  leftIcon={<FaWhatsapp />}
                  w={{ base: 'full', md: 'auto' }}
                >
                  Fale conosco pelo WhatsApp
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
                    <FormLabel color="rgba(42,82,118,1)">Nome</FormLabel>
                    <Input 
                      placeholder="Seu nome completo"
                      bg="white"
                      borderColor="rgba(42,82,118,0.4)"
                      _hover={{ borderColor: "rgba(42,82,118,0.6)" }}
                    />
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel color="rgba(42,82,118,1)">E-mail</FormLabel>
                    <Input 
                      type="email"
                      placeholder="seu@email.com"
                      bg="white"
                      borderColor="rgba(42,82,118,0.4)"
                      _hover={{ borderColor: "rgba(42,82,118,0.6)" }}
                    />
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel color="rgba(42,82,118,1)">Assunto</FormLabel>
                    <Input 
                      placeholder="Assunto da mensagem"
                      bg="white"
                      borderColor="rgba(42,82,118,0.4)"
                      _hover={{ borderColor: "rgba(42,82,118,0.6)" }}
                    />
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel color="rgba(42,82,118,1)">Mensagem</FormLabel>
                    <Textarea 
                      placeholder="Digite sua mensagem"
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
                    Entre em contato
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