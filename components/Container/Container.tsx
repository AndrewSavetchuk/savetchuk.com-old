import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="px-5 xxs:px-6 md:px-8 xl:px-16">{children}</div>;
};

export default Container;
