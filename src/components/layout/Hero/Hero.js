import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Hero.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Hero = () => (
  <div className={styles.root}>
    <div className='container '>
      <div className='row align-items-center justify-content-end'>
        <div className={`column ${styles.titles}`}>
          <div className={styles.subtitle}>Go green.</div>
          <div className={styles.title}>The world of plants</div>
        </div>
        <div className={styles.description}>
          Buy and discover everything you need to know about your plants, treat them with kindness and they will take care of you.
        </div>
      </div>
    </div>
  </div>
);

export default Hero;
