import Head from 'next/head';
import Image from 'next/image';
import ReactHtmlParser from 'react-html-parser';

import sidebarLinks from '@/config/sidebarLinks.json';

import { diffForHumans } from '@/helpers/DateHelper';

import { getLastCommitDate as getGithubLastCommitDate } from '@/services/GithubService';

import styles from '@/styles/Home.module.scss';

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
              Software Engineer with over 7 years of experience,
              <br /> Content Creator and Open-Source Contributor
            </p>
            <a
              href='mailto:andrew.savetchuk@gmail.com'
              className={styles.introButton}
              target='_blank'
              rel='noreferrer'
            >
              <span>&#x1f468;&#x1f3fb;&#x200d;&#x1f4bb;</span>Read More
            </a>
            <a
              href='mailto:andrew.savetchuk@gmail.com'
              className={styles.introButton}
              target='_blank'
              rel='noreferrer'
            >
              <span>&#x1F44B;</span>Say Hello
            </a>
          </section>
          <section className={styles.links}>
            {sidebarLinks.map((linkSection, linkSectionIndex) => (
              <div
                key={`linkSection-${linkSectionIndex}`}
                className={styles.linksBlock}
              >
                <h2>{linkSection.title}</h2>
                <ul>
                  {linkSection.links?.length
                    ? linkSection.links.map((link, linkIndex) => (
                      <li key={`linkSection-${linkSectionIndex}-${linkIndex}`}>
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
                            {props.stats[link.title.toLowerCase()] ?? link.subtitle}
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
  ] = await Promise.all([
    getGithubLastCommitDate('AndrewSavetchuk'),
  ]);

  return {
    props: {
      stats: {
        github: `Last commit: ${githubLastCommitDate ? diffForHumans(`${githubLastCommitDate}T23:59:59`) : 'Unknown'}`,
      }
    }
  };
}

export default Home;
