import React from 'react';
import Cover from './body/Cover';
import Intro from './body/Intro';

interface BodyProps {}

const Body: React.FunctionComponent<BodyProps> = ({}) => {
  return (
    <>
      <Cover />
      <Intro />
    </>
  );
};

export default Body;
