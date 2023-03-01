import React from 'react';
import Image from 'next/image';

import introStyles from '@/components/Intro/Intro.module.scss';

const Intro: React.FC = () => {
  return (
    <section className={introStyles.wrapper}>
      <Image
        src='/img/avatar.jpg'
        className={introStyles.avatar}
        alt="Andrew Savetchuk's avatar"
        width={120}
        height={120}
        quality={100}
        priority={true}
      />
      <h1 className={introStyles.title}>
        Andrew Savetchuk
      </h1>
      <p className={introStyles.description}>
        Software Engineer with over 7 years of experience,
        <br /> Content Creator and Open-Source Contributor
      </p>
      <div className={introStyles.buttonsGroup}>
        <a
          href='mailto:andrew.savetchuk@gmail.com'
          className={[introStyles.button, introStyles.buttonPrimary].join(' ')}
          target='_blank'
          rel='noreferrer'
        >
          <span>&#x1f468;&#x1f3fb;&#x200d;&#x1f4bb;</span> Read More
        </a>
        <a
          href='mailto:andrew.savetchuk@gmail.com'
          className={[introStyles.button, introStyles.buttonSecondary].join(' ')}
          target='_blank'
          rel='noreferrer'
        >
          <span>&#x1F44B;</span> Contact Me
        </a>
      </div>
    </section>
  );
};

export default Intro;
