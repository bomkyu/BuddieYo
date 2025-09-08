'use client';

import ListItem from './components/ListItem';

const LeftMenu = () => {
  return (
    <div className='flex flex-col w-2xs h-screen mr-12 shadow-xl'>
      <div className='flex flex-col gap-3 mt-[40%]'>
        <ListItem href={'/main'}>Main</ListItem>
        <ListItem href={'/profile/0'}>Profile</ListItem>
        <ListItem href={'/friend'}>Friend</ListItem>
        <ListItem href={'/trips'}>Trips</ListItem>
        <ListItem href={'/notification'}>Notification</ListItem>
      </div>
    </div>
  );
};
export default LeftMenu;
