import * as React from 'react';

interface IntroProps {}

const Intro: React.FunctionComponent<IntroProps> = ({}) => {
  return (
    <div className='mt-12 mb-12'>
      <section id='profile' className='w-full  h-full max-w-6xl mx-auto'>
        <div className='mb-6'>
          <h2 className='text-center text-muted text-4xl text-gray-400'>
            Greetings from Munich!
          </h2>
        </div>
        <div className='w-full flex space-x'>
          <img
            src='./images/intro/intro_naoto.png'
            alt='intro_naoto'
            className='w-1/5 mr-6 m a-auto'
          />
          <iframe
            className='w-1/2 m-auto rounded-md shadow-lg border-4 border-light-blue-500 border-opacity-75 hover:border-blue-500'
            src='https://www.youtube.com/embed/zT_wR_f_AS0'
            width='420'
            height='315'
            title='intro video'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          ></iframe>
          <img
            src='./images/intro/intro_naoto.png'
            alt='intro_naoto'
            className='w-1/5 h-1/4 ml-6'
          />
        </div>
      </section>
    </div>
  );
};

export default Intro;
