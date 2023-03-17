import React from 'react';

import styles from './Gradients.module.scss';

const Gradients: React.FC = () => {
  return (
    <div className={styles.gradients}>
      <div className={[styles.gradient, styles.gradientPrimary].join(' ')} />
      <div className={[styles.gradient, styles.gradientSecondary].join(' ')} />
    </div>
  )
};

export default Gradients;
