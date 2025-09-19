import Typography from '@/app/components/Typography';

const ImageUpload = () => {
  return (
    <div>
      <div className='flex gap-8 items-center m-auto'>
        <div className='w-28 aspect-square bg-gray-300 rounded-full m-auto'></div>
        <div className='flex flex-col justify-start align-baseline gap-4'></div>
      </div>
      <Typography className='mt-4 text-center' weight='bold' size='lg'>
        봄규
      </Typography>
    </div>
  );
};
export default ImageUpload;
