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
  return (
    <div className='w-full bg-gray-800 h-12'>
      <div className='w-full  h-full max-w-6xl mx-auto flex justify-end'>
        <div className='flex mr-10 items-center'>
          <AiOutlineTwitter className='w-6 h-6 text-gray-400 hover:text-gray-200 cursor-pointer mx-2' />
          <AiOutlineInstagram className='w-6 h-6 text-gray-400 hover:text-gray-200 cursor-pointer mx-2' />
          <GrFacebookOption className='w-6 h-6 text-gray-400 hover:text-gray-200 cursor-pointer mx-2' />
          <AiFillYoutube className='w-6 h-6 text-gray-400 hover:text-gray-200 cursor-pointer mx-2' />
        </div>
        <div className='w-12 h-full bg-blue-400 flex justify-center items-center'>
          <AiOutlineSearch className='w-8 h-8 text-white fill-current' />
        </div>
      </div>
    </div>
  );
};

export default Header;
