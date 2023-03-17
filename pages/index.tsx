import Head from 'next/head';
import { NextPage } from 'next';

import Container from '@/components/Container';
import Intro from '@/components/Intro';

export const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Andrew Savetchuk</title>
        <meta
          name='description'
          content='Software Engineer with a background in developing web applications and services for global customers, across the Consumer Services, Medical, and Fashion industries.'
        />
        <link
          rel='icon'
          href='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👨🏻‍💻</text></svg>'
        />
      </Head>
      <main>
        <Container>
          <Intro />
        </Container>
      </main>
    </div>
  );
};

export default Home;