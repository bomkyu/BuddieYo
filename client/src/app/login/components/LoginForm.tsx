'use client';
import Input from '@/app/components/Input';
import { SubmitHandler, useForm } from 'react-hook-form';

// NOTE: 나중에 스키마 파일로 분리
type FormValues = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ mode: 'onChange' });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    // TODO: 로그인 로직 구현
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
      <Input
        label='이메일'
        type='email'
        placeholder='buddieyo@example.com'
        register={register('email', {
          required: '이메일을 입력해주세요.',
          pattern: {
            value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            message: '유효한 이메일 주소를 입력해주세요.',
          },
        })}
        errorMessage={errors.email?.message}
      />
      <Input
        label='비밀번호'
        type='password'
        placeholder='비밀번호를 입력해주세요.'
      />
      <button
        type='submit'
        tabIndex={0}
        className='mt-6 p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200'
      >
        로그인
      </button>
    </form>
  );
};

export default LoginForm;
