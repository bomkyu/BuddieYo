import { ReactNode } from 'react';
import Button from './Button';

type PrimaryButtonProps = {
  onClick: () => void;
  children: ReactNode;
  className?: string;
  disable?: boolean;
};

const PrimaryButton = ({
  onClick,
  children,
  className,
  disable = false,
}: PrimaryButtonProps) => {
  return (
    <Button
      onClick={onClick}
      disable={disable}
      className={`w-full p-3 text-white rounded ${className || ''} ${
        disable ? 'bg-gray-500' : 'bg-blue-500'
      }`}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
