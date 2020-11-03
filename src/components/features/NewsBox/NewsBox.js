import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import styles from './NewsBox.module.scss';

class NewsBox extends React.Component {

  render() {
    const {news} = this.props;

    return (
      <div className='container'>

        <div className='pb-5 row justify-content-around'>
          <div className='col-5 align-items-center d-flex '>
            <div className='col'>
              <div className={styles.title}>{news.information1.title}</div>
              <div className={styles.description}>{news.information1.description}</div>
              <a href='/#' className={styles.buttonArrow}>
                <span>read more</span>
                <FontAwesomeIcon icon={faArrowRight}/>
              </a>
            </div>
          </div>
          <div className={'col-5 justify-content-center align-items-center d-flex ' + styles.imageBox1}>
            <img src={news.information1.image}/>
          </div>
        </div>

        <div className={'py-5 mb-5 row justify-content-around'}>
          <div className={'col-5 justify-content-center align-items-center d-flex ' + styles.imageBox2}>
            <img src={news.information2.image}/>
          </div>
          <div className='col-5 align-items-center d-flex'>
            <div className='col'>
              <div className={styles.title}>{news.information2.title}</div>
              <div className={styles.description}>{news.information2.description}</div>
              <a href='/#' className={styles.buttonArrow}>
                <span>read more</span>
                <FontAwesomeIcon icon={faArrowRight}/>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

NewsBox.propTypes = {
  news: PropTypes.array,
};

export default NewsBox;
