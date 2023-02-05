import React, { Fragment } from 'react';
import styles from '../assets/css/decoration.module.css';
import logo from '../assets/images/logo.svg';
const Decoration = () => {
  return (
    <Fragment>
      <div className={styles.decoration}>
        <div className={styles.logoContainer}>
          <div className={styles.logoImg}>
            <img src={logo} alt='my logo' />
          </div>
          <div className={styles.logoText}>Lorem Ipsum</div>
        </div>
      </div>
    </Fragment>
  );
};

export default Decoration;
