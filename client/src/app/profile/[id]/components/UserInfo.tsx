import Typography from '@/app/components/Typography';

const UserInfo = () => {
  return (
    <div>
      <div className='flex gap-4'>
        <div className='flex flex-col gap-2'>
          <Typography>이메일</Typography>
          <Typography
            className='rounded-md bg-gray-300 px-2.5 py-1 text-gray-600'
            size='sm'
          >
            a0109072806@gmail.com
          </Typography>
        </div>
        <div className='flex flex-col gap-2'>
          <Typography>생년월일</Typography>
          <Typography
            className='rounded-md bg-gray-300 px-2.5 py-1 text-gray-600'
            size='sm'
          >
            2000.12.02
          </Typography>
        </div>
      </div>
      <div className='mt-6 '>
        <Typography>소개</Typography>
        <div className='min-h-[100px] mt-2 p-1.5 border rounded-md border-gray-400'>
          <Typography size='sm'>안녕하세용</Typography>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
