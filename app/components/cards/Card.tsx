import { Box, Card, Flex, Heading, Image } from '@chakra-ui/react';

interface CharacterProps {
  name: string;
  image: string;
}

const Character: React.FC<CharacterProps> = ({ name, image }) => {
  const notFoundImage = image.includes('image_not_available');
  return (
    <Card role='group' h={{ base: 550, lg: 380 }} border='2px solid #ED1223' overflow='hidden'>
      <Image
        src={image}
        alt={name}
        objectFit='cover'
        h={{ base: 550, lg: 380 }}
        w='full'
        border='1px solid white'
        borderRadius={'0.375rem'}
        transition='all 0.3s ease-in-out'
        _groupHover={{ transform: 'scale(1.1)' }}
        objectPosition={notFoundImage ? 'left' : 'center'}
      />
      <Box
        position='absolute'
        w='full'
        h='full'
        bg='blackAlpha.600'
        transition='all 0.3s ease-in-out'
        _groupHover={{ background: 'transparent' }}
      />
      <Flex
        position='absolute'
        w={'full'}
        h={'full'}
        alignItems='flex-end'
        justifyContent='center'
        pb='10px'
      >
        <Heading
          textAlign='center'
          fontSize='22px'
          color={'white'}
          transition='all 0.3s ease-in-out'
          _groupHover={{ fontSize: '30px' }}
        >
          {name}
        </Heading>
      </Flex>
    </Card>
  );
};

export default Character;
