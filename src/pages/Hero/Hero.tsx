import React from 'react';
import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <div className={styles.HeroContainer}>
      <div className={styles.TopSection}>
        <span className={styles.HtmlTag}>{'<html>'}</span>
        <span className={[styles.HtmlTag, styles.MarginLeft].join(' ')}>{'<body>'}</span>
        <span className={[styles.HtmlTag, styles.MarginLeft, styles.MarginBottom].join(' ')}>{'<h1>'}</span>
      </div>
      <div className={styles.MiddleSection}>
        <h1 className={styles.Title}>Hi,</h1>
        <h1 className={styles.Title}>
          I&apos;m <span>Sam</span>,
        </h1>
        <h1 className={styles.Title}>Software Engineer</h1>
        <button className={styles.HeroButton}>Contact me</button>
      </div>
      <div className={styles.BottomSection}>
        <span className={[styles.HtmlTag, styles.MarginLeft, styles.MarginBottom].join(' ')}>{'</h1>'}</span>
        <span className={[styles.HtmlTag, styles.MarginLeft].join(' ')}>{'</body>'}</span>
        <span className={styles.HtmlTag}>{'</html>'}</span>
      </div>
    </div>
  );
};

export default Hero;
