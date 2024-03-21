import Head from 'next/head';
import { NextPage } from 'next';

import Container from '@/components/Container';
import Gradients from '@/components/Gradients';
import Hero from '@/components/Hero';

export const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Andrew Savetchuk</title>
      </Head>
      <main className="relative h-full">
        <Container>
          <Hero />
        </Container>
        <Gradients />
      </main>
    </>
  );
};

export default Home;
