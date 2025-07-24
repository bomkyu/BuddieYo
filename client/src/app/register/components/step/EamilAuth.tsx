'use client';

import {
  UseFormRegister,
  FieldErrors,
  UseFormGetValues,
  UseFormSetValue,
} from 'react-hook-form';
import Input from '@/app/components/Input';
import Button from '@/app/components/button/Button';
import SecondaryButton from '@/app/components/button/SecondaryButton';
import PrimaryButton from '@/app/components/button/PrimaryButton';

type EmailAuthProps = {
  register: UseFormRegister<any>;
  errors: FieldErrors;
  onNext: () => void;
  getValues: UseFormGetValues<any>;
  setValue: UseFormSetValue<any>;
  isValid: boolean;
};

const EmailAuth = ({
  register,
  errors,
  onNext,
  getValues,
  setValue,
  isValid,
}: EmailAuthProps) => {
  return (
    <div className='flex flex-col h-full'>
      <div className='flex flex-col gap-4 flex-1'>
        <div className='flex gap-2'>
          <div className='flex-1'>
            <Input
              label='이메일 인증'
              type='text'
              register={register('email-confirm', {
                required: '인증번호를 입력해주세요.',
              })}
              errorMessage={errors['email-confirm']?.message as string}
            />
          </div>
          <div className='w-[60px]'>
            <PrimaryButton onClick={() => alert('인증이용')} className='h-16'>
              인증
            </PrimaryButton>
          </div>
        </div>
      </div>
      <div>
        <Button onClick={onNext} disable={!isValid}>
          다음
        </Button>
      </div>
    </div>
  );
};

export default EmailAuth;
