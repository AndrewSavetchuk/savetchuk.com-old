import React from 'react';
import styles from './Hero.module.scss';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <section className="flex min-h-full items-center pb-4 md:pb-16 md:pt-12">
      <div className="mx-auto flex max-w-[480px] flex-col items-center text-center md:max-w-[670px] lg:max-w-[920px]">
        <Image
          src="/img/avatar.png"
          className="mb-12 h-auto max-w-[120px] md:max-w-[150px]"
          alt="Andrew Savetchuk's avatar"
          width={150}
          height={150}
          quality={100}
          priority={true}
        />
        <h1 className="mb-6 text-4xl font-bold md:text-6xl">Hi, I&apos;m Andrew</h1>
        <div className="text-neutral-250 mb-10 space-y-4 text-base md:mb-12 md:text-xl">
          Software Engineer based in Canada who is passionate <br /> about everything related to technology.
        </div>
        <a
          href="mailto:andrew.savetchuk@gmail.com"
          className={styles.heroButton}
        >
          Send Me a Message
        </a>
        <div className={styles.heroResumeLink}>
          Or download my resume{' '}
          <a
            href="/Resume_Andrew_Savetchuk_2023.pdf"
            target="_blank"
          >
            here
          </a>
          .
        </div>
      </div>
    </section>
  );
};

export default Hero;
