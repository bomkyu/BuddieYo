import { JSX } from 'react';

type Typography = {
  children: React.ReactNode;
  weight?: 'medium' | 'normal' | 'semibold' | 'bold';
  size?: 'sm' | 'base' | 'lg' | 'xl' | '2xl';
  as?: keyof JSX.IntrinsicElements; // 'p' | 'span' | 'h1' 등 태그 지정
};

const weightClassMap = {
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
} as const;

const sizeClassMap = {
  sm: 'text-sm',
  base: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
  '2xl': 'text-2xl',
} as const;

const Typography = ({
  children,
  weight = 'medium',
  size = 'base',
  as: Component = 'p',
}: Typography) => {
  const fontWeightClass = weightClassMap[weight];
  const sizeClass = sizeClassMap[size];

  return (
    <Component className={`${fontWeightClass} ${sizeClass}`}>
      {children}
    </Component>
  );
};

export default Typography;
