import React from 'react';
import styles from './Hero.module.scss';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBody}>
        <Image
          src='/img/avatar.png'
          className={styles.heroAvatar}
          alt="Andrew Savetchuk's avatar"
          width={150}
          height={150}
          quality={100}
          priority={true}
        />
        <h1 className={styles.heroTitle}>Hi, I&apos;m Andrew</h1>
        <div className={styles.heroSubtitle}>
          <span>Software Engineer based in Canada <br />who is passionate about everything <br />related to technology.</span>
          <span>In my free time, I run <a href='https://blog.savetchuk.com' target="_blank" rel="noreferrer">a blog</a> where <br />I write about interesting things that <br />I learn along the way.</span>
        </div>
        <a
          href='mailto:andrew.savetchuk@gmail.com'
          className={styles.heroButton}
        >
          Send Me a Message
        </a>
        <div className={styles.heroResumeLink}>
          Or download my resume <a href='/Resume_Andrew_Savetchuk_2023.pdf' target="_blank">here</a>.
        </div>
      </div>
    </section>
  );
};

export default Hero;
