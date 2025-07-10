import { FieldError, UseFormRegisterReturn } from 'react-hook-form';
import Typography from './Typography';

import React from 'react';

type InputProps = {
  label: string;
  register?: UseFormRegisterReturn;
  errorMessage?: FieldError['message'];
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input = ({ label, register, errorMessage, ...rest }: InputProps) => {
  return (
    <label className='px-3 py-2 bg-gray-100 rounded-md'>
      <Typography weight='bold'>{label}</Typography>
      <input className='text-sm font-normal' {...register} {...rest} />
      {errorMessage && (
        <Typography size='xs' className='text-red-500'>
          {errorMessage}
        </Typography>
      )}
    </label>
  );
};

export default Input;
