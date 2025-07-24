'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import EmailAuth from './step/EamilAuth';
import UserInfomation from './step/UserInfomation';
import SuccessPage from './step/SuccessPage';

import { useRegisterStore } from '../store/registerStore';

const RegisterForm = () => {
  const [step, setStep] = useState(0);
  const { setFormData } = useRegisterStore();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    trigger,
    getValues,
    setValue,
  } = useForm({ mode: 'onChange' });

  const nextStep = async () => {
    let isValid = false;
    if (step === 0) {
      isValid = await trigger(['email', 'email-confirm']);
      if (isValid) {
        const { email } = getValues();
        setFormData({ email });
      }
    } else if (step === 1) {
      isValid = await trigger([
        'nickname',
        'id',
        'password',
        'password-confirm',
      ]);
      if (isValid) {
        const { nickname, id, password } = getValues();
        setFormData({ nickname, id, password });
      }
    }

    if (isValid) {
      setStep((prevStep) => prevStep + 1);
    }
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const { formData } = useRegisterStore();

  const onSubmit = (data: any) => {
    const finalData = { ...formData, ...data };
    console.log(finalData);

    setStep(2);
  };

  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <EmailAuth
            register={register}
            errors={errors}
            onNext={nextStep}
            getValues={getValues}
            setValue={setValue}
            isValid={isValid}
          />
        );
      case 1:
        return (
          <UserInfomation
            register={register}
            errors={errors}
            onNext={handleSubmit(onSubmit)}
            onPrev={prevStep}
          />
        );
      case 2:
        return <SuccessPage />;
      default:
        return null;
    }
  };

  return (
    <div className='flex flex-col h-full py-5'>
      <div className='relative w-full h-[10px] mb-8 bg-gray-100 rounded-2xl overflow-hidden'>
        <div
          className={`absolute top-0 left-0 bottom-0 bg-blue-500 rounded-2xl transition-all duration-300 ease-in-out`}
          style={{ width: `${((step + 1) / 3) * 100}%` }}
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className='flex flex-col h-full'
      >
        <div className='flex-1 flex flex-col gap-4'>{renderStep()}</div>
      </form>
    </div>
  );
};
export default RegisterForm;
