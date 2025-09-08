import React from 'react';
import Typography from '../../Typography';

type TabItemProps = {
  children: React.ReactNode;
};
const TabItem = ({ children }: TabItemProps) => {
  return (
    <Typography
      size='sm'
      className='px-3 py-1.5 bg-gray-200 rounded-lg text-gray-600'
    >
      {children}
    </Typography>
  );
};
export default TabItem;
