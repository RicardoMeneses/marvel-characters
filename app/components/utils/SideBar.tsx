import { Box, Show } from '@chakra-ui/react';
import { RiCloseLine, RiMenu3Fill } from 'react-icons/ri';
import { IconButton } from '@chakra-ui/react';
import { useState } from 'react';

const SideBar = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen(!open);
  };
  return (
    <Box
      zIndex={50}
      backgroundColor='white'
      transition='all 0.3s ease-in'
      position='fixed'
      top={0}
      width={{ base: '400px', lg: '250px' }}
      height='full'
      overflowY='auto'
      padding={2}
      left={{ base: open ? '0' : '-100%', lg: '0' }}
    >
      {children}
      <Show below='lg'>
        <IconButton
          onClick={toggleMenu}
          zIndex={50}
          position='fixed'
          bottom={8}
          right={6}
          height='70px'
          width='70px'
          color='#ED1223'
          fontSize='60px'
          aria-label='Open Sidebar'
          icon={open ? <RiCloseLine /> : <RiMenu3Fill />}
        />
      </Show>
    </Box>
  );
};

export default SideBar;
