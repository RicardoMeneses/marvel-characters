import { Center, Heading, HStack, Stack, VStack, Text, StackDivider, Flex } from '@chakra-ui/react';
import { Link } from '@remix-run/react';
import { BsFillFilePersonFill } from 'react-icons/bs';
import { VscBook } from 'react-icons/vsc';
import { MdMovieEdit } from 'react-icons/md';
import SideBar from '../utils/SideBar';

const Panel = () => {
  return (
    <SideBar>
      <VStack bg='#ED1223' borderRadius={15} h='full' p={3} color='white' spacing={20}>
        <Center border='1px solid white' p='10px 20px' mt='5'>
          <Heading as='h2' fontSize='18px' textTransform='uppercase'>
            Marvel App
          </Heading>
        </Center>
        <Flex justifyContent='space-between' direction='column' height='full' pb={5}>
          <Stack spacing={4}>
            <Link to='/'>
              <HStack fontSize={{ base: '4xl', lg: '20px' }}>
                <BsFillFilePersonFill />
                <Text>Personajes</Text>
              </HStack>
            </Link>
            <Link to='/comics'>
              <HStack fontSize={{ base: '4xl', lg: '20px' }}>
                <VscBook />
                <Text>Comics</Text>
              </HStack>
            </Link>
            {/* <Link to='/creadores'>
              <HStack fontSize={{ base: '4xl', lg: '20px' }}>
                <FiUsers />
                <Text>Creadores</Text>
              </HStack>
            </Link> */}
            <Link to='/series'>
              <HStack fontSize={{ base: '4xl', lg: '20px' }}>
                <MdMovieEdit />
                <Text>Series</Text>
              </HStack>
            </Link>
          </Stack>
          <Center>© 2023 MARVEL</Center>
        </Flex>
      </VStack>
    </SideBar>
  );
};

export default Panel;
