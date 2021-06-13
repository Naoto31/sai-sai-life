import { motion } from 'framer-motion';
import * as React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';

interface IntroProps {}

const Intro: React.FunctionComponent<IntroProps> = ({}) => {
  const [showAndHide, setShowAndHide] = useState(false);
  const sectionRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        setShowAndHide(true);
      } else if (window.scrollY < 50) {
        setShowAndHide(false);
      }
    });
  }, []);

  return (
    <div className='pt-12 mb-12 bg-gradient-to-t from-green-100 relative'>
      <motion.section
        id='profile'
        className='w-full  h-full max-w-6xl mx-auto overflow-hidden'
        style={{height:"670px"}}
        ref={sectionRef}
        transition={{ duration: 0.7 }}
        animate={
              showAndHide
                ? { opacity: 1, paddingTop: '0px' }
                : { opacity: 0, paddingTop: '250px' }
            }
      >
        <div className='mb-6'>
          <h2
            className='text-center text-muted text-4xl text-gray-400' 
          >
            Greetings from Munich!
          </h2>
        </div>
        <div className='w-full flex'>
          <iframe
            className='w-1/2 m-auto rounded-md shadow-lg border-8 border-gray-50 border-opacity-75 hover:border-green-400'
            src='https://www.youtube.com/embed/zT_wR_f_AS0'
            width='420'
            height='335'
            title='intro video'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          ></iframe>
          <img
            src='./images/intro/intro_both.png'
            alt='intro_naoto'
            className='w-2/5 ml-6 filter drop-shadow-xl '
          />
        </div>
      </motion.section>
    </div>
  );
};

export default Intro;
