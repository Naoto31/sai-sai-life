import React from 'react';
import {
  AiOutlineSearch,
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiFillYoutube,
} from 'react-icons/ai';
import { GrFacebookOption } from 'react-icons/gr';

interface HeaderProps {}

const Header: React.FunctionComponent<HeaderProps> = ({}) => {
  const twitterUrl = 'https://twitter.com/Nao10sai';
  const InstagramUrl = 'https://www.instagram.com/saisai.life/';
  const FacebookUrl = 'https://www.facebook.com/saisai.life';
  const YouTubeUrl = 'https://www.youtube.com/channel/UCmW8u1MGJ0ixIMXLahnPf3g';

  const openSNS = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div className='w-full bg-gray-800 h-12'>
      <div className='w-full  h-full max-w-6xl mx-auto flex justify-end'>
        <div className='flex mr-10 items-center'>
          <AiOutlineTwitter
            className='w-6 h-6 text-gray-400 hover:text-gray-200 cursor-pointer mx-2'
            onClick={(e) => {
              openSNS(twitterUrl);
            }}
          />
          <AiOutlineInstagram
            className='w-6 h-6 text-gray-400 hover:text-gray-200 cursor-pointer mx-2'
            onClick={(e) => {
              openSNS(InstagramUrl);
            }}
          />
          <GrFacebookOption
            className='w-6 h-6 text-gray-400 hover:text-gray-200 cursor-pointer mx-2'
            onClick={(e) => {
              openSNS(FacebookUrl);
            }}
          />
          <AiFillYoutube
            className='w-6 h-6 text-gray-400 hover:text-gray-200 cursor-pointer mx-2'
            onClick={(e) => {
              openSNS(YouTubeUrl);
            }}
          />
        </div>
        <div className='w-12 h-full bg-blue-400 flex justify-center items-center'>
          <AiOutlineSearch className='w-8 h-8 text-white fill-current' />
        </div>
      </div>
    </div>
  );
};

export default Header;
