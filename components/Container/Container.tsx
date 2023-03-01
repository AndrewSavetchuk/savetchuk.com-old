import React from 'react';

import containerStyles from '@/components/Container/Container.module.scss';

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className={containerStyles.container}>
      {children}
    </div>
  )
};

export default Container;
