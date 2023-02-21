import React from 'react';
import CloudDownloadOutlinedIcon from '@mui/icons-material/CloudDownloadOutlined';
import styles from './AboutMe.module.scss';

const AboutMe = () => {
  return (
    <div className={styles.AboutMeContainer}>
      <h1 className={styles.AboutMeTitle}>abount me</h1>
      <div className={styles.AboutMe__underline} />

      <span className={styles.HtmlTag}>{'<p>'}</span>
      <div className={styles.AboutMe__infoWrapper}>
        <p className={styles.AboutMe__infoText}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <p className={styles.AboutMe__infoText}>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking
          at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
          opposed to using Content here, content here, making it look like readable English.
        </p>
        <p className={styles.AboutMe__infoText}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos laborum tempore odit eius molestiae cum.
        </p>
      </div>
      <span className={styles.HtmlTag}>{'</p>'}</span>
      <div className={styles.AboutMe__downloadWrapper}>
        <button className={styles.DownloadButton}>
          <CloudDownloadOutlinedIcon className={styles.DownloadIcon} />
        </button>
        <p className={styles.DownloadText}>Download My Resume</p>
        <div className={styles.DownloadLine}></div>
      </div>
    </div>
  );
};

export default AboutMe;
