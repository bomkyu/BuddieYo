import React from 'react';

type TabProps = {
  children: React.ReactNode;
};
const Tab = ({ children }: TabProps) => {
  return <div className='flex gap-4'>{children}</div>;
};
export default Tab;
