import Image from 'next/image';
import Typography from '../Typography';

const Card = () => {
  return (
    <div className='flex flex-col relative w-[240px] gap-4 shadow-xl'>
      <div className='relative w-full pb-[60%]'>
        <Image
          src={'/assets/img_dummy.jpg'}
          fill
          className='object-cover'
          alt='asd'
        />
      </div>
      <div className='p-4'>
        <Typography>후쿠오카 여행</Typography>
      </div>
    </div>
  );
};
export default Card;
