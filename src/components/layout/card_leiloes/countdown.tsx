import React from 'react';

interface CountdownBoxProps {
  number: number;
}

const CountdownBox: React.FC<CountdownBoxProps> = ({ number }) => {
  return (
    <div className="bg-purple-800 text-white p-4 rounded-md shadow-md">
      {number}
    </div>
  );
};

export default CountdownBox;