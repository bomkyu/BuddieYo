import { JSX } from 'react';

type Typography = {
  children: React.ReactNode;
  weight?: 'medium' | 'normal' | 'semibold' | 'bold';
  size?:
    | 'xs'
    | 'sm'
    | 'base'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | '4xl'
    | '5xl'
    | '6xl'
    | '7xl'
    | '8xl';
  as?: keyof JSX.IntrinsicElements; // 'p' | 'span' | 'h1' 등 태그 지정
  className?: string;
};

const weightClassMap = {
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
} as const;

const sizeClassMap = {
  xs: 'text-xs',
  sm: 'text-sm',
  base: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
  '2xl': 'text-2xl',
  '3xl': 'text-3xl',
  '4xl': 'text-4xl',
  '5xl': 'text-5xl',
  '6xl': 'text-6xl',
  '7xl': 'text-7xl',
  '8xl': 'text-8xl',
} as const;

const Typography = ({
  children,
  weight = 'medium',
  size = 'base',
  as: Component = 'p',
  className,
}: Typography) => {
  const fontWeightClass = weightClassMap[weight];
  const sizeClass = sizeClassMap[size];

  return (
    <Component className={`${fontWeightClass} ${sizeClass} ${className}`}>
      {children}
    </Component>
  );
};

export default Typography;
