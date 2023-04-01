import { Box, Flex, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { BsSearch } from 'react-icons/bs';

const Header = () => {
  return (
    <Box
      as='header'
      width='full'
      position='fixed'
      zIndex={10}
      backgroundColor='white'
      padding={8}
      paddingLeft={{ lg: '260px' }}
    >
      <Flex justifyContent={{ base: 'center', lg: 'flex-end' }}>
        <InputGroup w={{ base: '96', lg: '72' }} h={{ base: 20, lg: 10 }}>
          <InputLeftElement
            h={{ base: 20, lg: 10 }}
            pointerEvents='none'
            children={<BsSearch color='gray.300' />}
          />
          <Input
            h={{ base: 20, lg: 10 }}
            bg='gray.100'
            placeholder='Busca por nombre'
            fontSize={{ base: '30px', lg: '18px' }}
          />
        </InputGroup>
      </Flex>
    </Box>
  );
};

export default Header;
