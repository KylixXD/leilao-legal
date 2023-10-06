'use client';

import { Card } from 'flowbite-react';
import Image from 'next/image';



export default function Depoimentos() {
  return (
  <div className='mt-20 pb-24 relative grid grid-cols-3 gap-4 pl-32 pr-32'>
     <Card>
      <div className="flex flex-col items-center pb-10">
        <Image
          alt="Bessa image"
          className="mb-3 rounded-full shadow-lg"
          height="96"
          src="/assets/Bessa.png"
          width="96"
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          Lucas Bessa
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          Visual Designer
        </span>
      </div>
    </Card>
    <Card>
      <div className="flex flex-col items-center pb-10">
        <Image
          alt="Ozeias image"
          className="mb-3 rounded-full shadow-lg"
          height="96"
          src="/assets/Ozeias.png"
          width="96"
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          Ozeias Souza
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          Visual Designer
        </span>
      </div>
    </Card>
    <Card>
      <div className="flex flex-col items-center pb-10">
        <Image
          alt="Bonnie image"
          className="mb-3 rounded-full shadow-lg"
          height="96"
          src="/assets/Pedro.png"
          width="96"
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          Pedro Vinicius
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          Visual Designer
        </span>
      </div>
    </Card>
  </div>
  )
}