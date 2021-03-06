import React from 'react';
import Button from '../../common/Button/Button';

import styles from './SpecialPriceBox.module.scss';

class SpecialPriceBox extends React.Component {

  render() {

    return (
      <div className='container mt-3'>
        <div className={'row d-flex justify-content-around align-items-center ' + styles.box}>
          <div className={styles.boxText}>
            <div className={styles.title}>
              <p>Special
                <span> Collection</span>
              </p>
            </div>
            <div className={styles.percent}>
              <p>Save up
                <span> 45%</span>
              </p>
            </div>
            <div className={'d-flex justify-content-end ' + styles.button}>
              <Button variant='main'>Shop now</Button>
            </div>
          </div>
          <div className={styles.boxImage}>
            <img src={'https://i.postimg.cc/HxbnYVRV/photo.png'} alt='image of plant'/>
          </div>
        </div>
      </div>
    );
  }
}

export default SpecialPriceBox;
