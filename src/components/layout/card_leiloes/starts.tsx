import React from 'react';

interface DateInfoCardProps {
  startDate: string; 
}

const DateInfoCard: React.FC<DateInfoCardProps> = ({ startDate }) => {
  return (
    <div className="bg-gray-200 p-4 rounded-md shadow-md">
      <p className="text-gray-700 font-semibold">{startDate}</p>
    </div>
  );
};

export default DateInfoCard;