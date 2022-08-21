import Head from 'next/head';
import { Box } from '@chakra-ui/react';

import Footer from './Footer';
import Navbar from './Navbar';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Cheffy us</title>
      </Head>
      <Box  maxwidth='1512px' m='auto'>
        <header maxwidth='1200px' m='auto'>
          <Navbar />
        </header>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </Box>
    </>
  );
}