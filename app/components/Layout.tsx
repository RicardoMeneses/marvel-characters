import { Box } from '@chakra-ui/react';
import Header from './utils/Header';
import Panel from './utils/Panel';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box minH='100vh'>
      <Panel />
      <Header />
      <Box
        as='main'
        padding={8}
        paddingTop={{ base: '160px', lg: 28 }}
        paddingLeft={{ lg: '280px' }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
