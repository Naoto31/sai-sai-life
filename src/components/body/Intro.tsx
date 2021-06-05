import * as React from 'react';

interface IntroProps {}

const Intro: React.FunctionComponent<IntroProps> = ({}) => {
  return (
    <div className='mt-12'>
      <section id='profile' className="w-full">
        <h2 className='text-center text-muted text-4xl text-gray-400'>
          Greetings from Munich!
        </h2>
        <div>
          <iframe
            className="m-auto"
            width='560'
            height='315'
            src='https://www.youtube.com/embed/zT_wR_f_AS0'
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Intro;
