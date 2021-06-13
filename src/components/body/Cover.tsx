import React from 'react';
import { useState } from 'react';
import { FiArrowRightCircle, FiArrowLeftCircle } from 'react-icons/fi';

interface CoverProps {}

const Cover: React.FunctionComponent<CoverProps> = ({}) => {
  const [page, setPage] = useState(1);
  return (
    <div
      className='w-full bg-white py-24 flex flex-col transition transform'
      style={{
        backgroundImage: `url(./images/cover_${page}.jpg)`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className='w-full flex justify-center'>
        <div className='w-44 h-28 flex justify-center'>
          <img src='./logo_v1.png' className='h-full' />
        </div>
      </div>
      <div className='w-full  h-full'>
        <div className='w-full mt-16 h-64 flex px-10'>
          <div className='w-20 flex items-center justify-center'>
            <FiArrowLeftCircle
              className='w-10 h-10 text-white hover:text-gray-200 cursor-pointer transition duration-300 transform hover:scale-110 '
              onClick={() => {
                if (page === 1) {
                  setPage(3);
                } else {
                  setPage(page - 1);
                }
              }}
            />
          </div>
          <div className='flex-1 flex flex-col justify-center items-center text-white'>
            <p className='text-3xl'>Life is an adventure</p>
            <h1 className='text-6xl mt-4'>We can show you the world</h1>
          </div>
          <div
            className='w-20 flex items-center justify-center'
            onClick={() => {
              if (page === 3) {
                setPage(1);
              } else {
                setPage(page + 1);
              }
            }}
          >
            <FiArrowRightCircle className='w-10 h-10 text-white hover:text-gray-200 cursor-pointer transition duration-300 transform hover:scale-110 ' />
          </div>
        </div>
        <div className='w-full h-10 mt-14 flex justify-center items-center'>
          <div
            className={
              'w-4 h-4 mx-2 rounded-full cursor-pointer ' +
              (page === 1 ? 'bg-white' : 'bg-gray-400')
            }
            onClick={() => {
              setPage(1);
            }}
          ></div>
          <div
            className={
              'w-4 h-4 mx-2 rounded-full cursor-pointer ' +
              (page === 2 ? 'bg-white' : 'bg-gray-400')
            }
            onClick={() => {
              setPage(2);
            }}
          ></div>
          <div
            className={
              'w-4 h-4 mx-2 rounded-full cursor-pointer ' +
              (page === 3 ? 'bg-white' : 'bg-gray-400')
            }
            onClick={() => {
              setPage(3);
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Cover;
