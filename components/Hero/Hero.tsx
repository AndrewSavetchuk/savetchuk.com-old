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
        <p className={styles.heroSubtitle}>
          Software Engineer based in Canada who is passionate about everything related to technology. <br />
          In my free time, I run <a href='https://blog.savetchuk.com' target="_blank" rel="noreferrer">a blog</a> where I write about interesting things that I learn along the way.
        </p>
        <a
          href='mailto:andrew.savetchuk@gmail.com'
          className={styles.heroButton}
        >
          Send Me a Message
        </a>
        <div className={styles.heroResumeLink}>
          Looking for my resume? <a href='/Resume_Andrew_Savetchuk_2023.pdf' target="_blank">Download it here</a>.
        </div>
      </div>
    </section>
  );
};

export default Hero;
