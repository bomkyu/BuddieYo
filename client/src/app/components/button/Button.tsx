import { ReactNode } from 'react';

type ButtonProps = {
  onClick: () => void;
  children: ReactNode;
  className?: string;
  disable?: boolean;
};
const Button = ({
  onClick,
  children,
  className,
  disable = false,
}: ButtonProps) => {
  return (
    <button
      type='button'
      onClick={onClick}
      disabled={disable}
      className={`w-full p-3 text-white rounded ${className || ''} ${
        disable ? 'bg-gray-500' : 'bg-blue-500'
      }`}
    >
      {children}
    </button>
  );
};
export default Button;
