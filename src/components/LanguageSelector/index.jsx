import React from 'react';
import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  Flex,
  Icon,
  useColorModeValue
} from '@chakra-ui/react';
import { FaChevronDown, FaGlobe } from 'react-icons/fa';
import { useTranslation } from '../../hooks/useTranslation';

const LanguageSelector = ({ isScrolled }) => {
  const { language, changeLanguage, t } = useTranslation();
  
  const languages = [
    { code: 'pt-BR', label: 'PT-BR', flag: '🇧🇷' },
    { code: 'en', label: 'EN', flag: '🇺🇸' }
  ];

  const currentLanguage = languages.find(lang => lang.code === language);
  
  const buttonColor = useColorModeValue(
    isScrolled ? 'white' : 'rgba(42,82,118,255)',
    'white'
  );

  return (
    <Box position="relative">
      <Menu>
        <MenuButton
          as={Button}
          variant="ghost"
          size="sm"
          color={buttonColor}
          _hover={{
            bg: isScrolled ? 'rgba(255,255,255,0.1)' : 'rgba(42,82,118,0.1)'
          }}
          _active={{
            bg: isScrolled ? 'rgba(255,255,255,0.2)' : 'rgba(42,82,118,0.2)'
          }}
          rightIcon={<Icon as={FaChevronDown} w={3} h={3} />}
          leftIcon={<Icon as={FaGlobe} w={4} h={4} />}
          fontSize="sm"
          fontWeight="500"
          px={3}
          py={2}
          transition="all 0.2s"
        >
          <Flex align="center" gap={2}>
            <Text as="span" fontSize="sm">
              {currentLanguage?.flag}
            </Text>
            <Text as="span" fontSize="sm">
              {currentLanguage?.label}
            </Text>
          </Flex>
        </MenuButton>
        
        <MenuList
          bg="white"
          borderColor="rgba(42,82,118,0.1)"
          border="1px solid"
          boxShadow="lg"
          borderRadius="md"
          py={1}
          minW="120px"
        >
          {languages.map((lang) => (
            <MenuItem
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              bg={language === lang.code ? 'rgba(42,82,118,0.1)' : 'transparent'}
              _hover={{ bg: 'rgba(42,82,118,0.1)' }}
              py={2}
              px={3}
            >
              <Flex align="center" gap={3} w="100%">
                <Text fontSize="sm">{lang.flag}</Text>
                <Text 
                  fontSize="sm" 
                  color="rgba(42,82,118,255)"
                  fontWeight={language === lang.code ? '600' : '400'}
                >
                  {lang.label}
                </Text>
              </Flex>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default LanguageSelector;
