import { ReactNode } from 'react';
import Button from './Button';

type SecondaryButtonProps = {
  onClick: () => void;
  children: ReactNode;
  className?: string;
};

const SecondaryButton = ({
  onClick,
  children,
  className,
}: SecondaryButtonProps) => {
  return (
    <Button
      onClick={onClick}
      className={`bg-gray-200 text-black ${className || ''}`}
    >
      {children}
    </Button>
  );
};

export default SecondaryButton;
