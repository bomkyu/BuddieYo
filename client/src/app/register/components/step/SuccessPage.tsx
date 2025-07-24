'use client';

import Button from '@/app/components/button/Button';

const SuccessPage = () => {
  return (
    <div className='flex flex-col items-center justify-center h-full text-center'>
      <h2 className='text-2xl font-bold mb-4'>회원가입이 완료되었습니다!</h2>
      <p className='text-gray-600'>BuddieYo에 오신 것을 환영합니다.</p>
      <Button onClick={() => alert('로그인 페이지로 이동')}>
        로그인 페이지로 이동
      </Button>
    </div>
  );
};

export default SuccessPage;
