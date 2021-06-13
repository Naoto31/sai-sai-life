import * as React from 'react';

interface YouTubeProps {}

const YouTube: React.FunctionComponent<YouTubeProps> = ({}) => {
  return (
    <div className='text-center w-full pt-20 pb-20 bg-blue-300'>
      <h2 className="text-white text-4xl pb-10">Most Popular Video</h2>
      <iframe className="m-auto" width="560" height="315" src="https://www.youtube.com/embed/48Zx9sB3ogM" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
  );
};

export default YouTube;
