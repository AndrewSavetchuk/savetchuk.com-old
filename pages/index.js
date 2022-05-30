import Head from 'next/head';
import Image from 'next/image';
import ReactHtmlParser from 'react-html-parser';

import linkBlocks from '@/config/linkBlocks.json';

import { diffForHumans } from '@/helpers/DateHelper';

import { getLastCommitDate as getGithubLastCommitDate } from '@/services/GithubService';
import { getLastTweetDate as getTwitterLastTweetDate } from '@/services/TwitterService';

import styles from '@/styles/Home.module.scss';

function getSubtitle (key, props) {
  key = key.toLowerCase();

  switch (key) {
    case 'github':
    case 'twitter':
      return props.stats[key];
    case 'linked in':
      return 'You can find my CV here'
    case 'instagram':
      return 'Non-technical stuff';
    default:
      return '';
  }
}

function Home (props) {
  return (
    <div className={styles.container}>
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
      <main className={styles.main}>
        <div className={styles.mainColumn}>
          <section className={styles.intro}>
            <Image
              src='/img/avatar.jpg'
              className={styles.introAvatar}
              alt="Andrew Savetchuk's avatar"
              width={120}
              height={120}
              quality={100}
              priority={true}
            />
            <h1 className={styles.introTitle}>Andrew Savetchuk</h1>
            <p className={styles.introDescription}>
              Software Engineer, Content Creator,
              <br /> Open-Source contributor
            </p>
            <a
              href='mailto:andrew.savetchuk@gmail.com'
              className={styles.introButton}
              target='_blank'
              rel='noreferrer'
            >
              <span>&#x1F4E8;</span>Get In Touch
            </a>
          </section>
          <section className={styles.links}>
            {linkBlocks.map((linkBlock, linkBlockIndex) => (
              <div
                key={`linkBlock-${linkBlockIndex}`}
                className={styles.linksBlock}
              >
                <h2>{linkBlock.title}</h2>
                <ul>
                  {linkBlock.links?.length
                    ? linkBlock.links.map((link, linkIndex) => (
                      <li key={`linkBlock-${linkBlockIndex}-${linkIndex}`}>
                        <div>
                          <span>{ReactHtmlParser(link.icon)}</span>
                          <a
                            href={link.href}
                            target='_blank'
                            rel='noreferrer'
                            className={styles.linksItemTitle}
                          >
                            {link.title}
                          </a>
                          <div className={styles.linksItemSubtitle}>
                            {getSubtitle(link.title, props)}
                          </div>
                        </div>
                      </li>
                    ))
                    : ''}
                </ul>
              </div>
            ))}
          </section>
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps () {
  let [
    githubLastCommitDate,
    twitterLastTweetDate
  ] = await Promise.all([
    getGithubLastCommitDate('AndrewSavetchuk'),
    getTwitterLastTweetDate('AndrewSavetchuk')
  ]);

  githubLastCommitDate = `${githubLastCommitDate}T23:59:59`;
  twitterLastTweetDate = twitterLastTweetDate.replace('.000Z', '');

  return {
    props: {
      stats: {
        github: `Last commit: ${diffForHumans(githubLastCommitDate)}`,
        twitter: `Last tweet: ${diffForHumans(twitterLastTweetDate)}`
      }
    }
  };
}

export default Home;
