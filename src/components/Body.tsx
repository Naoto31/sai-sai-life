import React from 'react';
import Cover from './body/Cover';
import Intro from './body/Intro';
import Worldmap from './body/Worldmap';

interface BodyProps {}

const Body: React.FunctionComponent<BodyProps> = ({}) => {
  return (
    <>
      <Cover />
      <Intro />
      <Worldmap />
    </>
  );
};

export default Body;
