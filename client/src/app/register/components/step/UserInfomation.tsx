'use client';

import { UseFormRegister, FieldErrors } from 'react-hook-form';
import Input from '@/app/components/Input';
import SecondaryButton from '@/app/components/button/SecondaryButton';
import PrimaryButton from '@/app/components/button/PrimaryButton';

type UserInfomationProps = {
  register: UseFormRegister<any>;
  errors: FieldErrors;
  onNext: () => void;
  onPrev: () => void;
};

const UserInfomation = ({
  register,
  errors,
  onNext,
  onPrev,
}: UserInfomationProps) => {
  return (
    <div className='flex flex-col h-full'>
      <div className='flex flex-col gap-4 flex-1'>
        <Input
          label='닉네임'
          type='text'
          register={register('nickname', {
            required: '닉네임을 입력해주세요.',
          })}
          errorMessage={errors.nickname?.message as string}
        />
        <Input
          label='아이디'
          type='text'
          register={register('id', { required: '아이디를 입력해주세요.' })}
          errorMessage={errors.id?.message as string}
        />
        <Input
          label='비밀번호'
          type='password'
          register={register('password', {
            required: '비밀번호를 입력해주세요.',
          })}
          errorMessage={errors.password?.message as string}
        />
        <Input
          label='비밀번호 확인'
          type='password'
          register={register('password-confirm', {
            required: '비밀번호 확인을 입력해주세요.',
            validate: (value, formValues) =>
              value === formValues.password || '비밀번호가 일치하지 않습니다.',
          })}
          errorMessage={errors['password-confirm']?.message as string}
        />
      </div>
      <div className='flex gap-4 mt-4'>
        <SecondaryButton onClick={onPrev} className='flex-1'>
          이전
        </SecondaryButton>
        <PrimaryButton onClick={onNext} className='flex-1'>
          가입 완료
        </PrimaryButton>
      </div>
    </div>
  );
};

export default UserInfomation;
