type Typography = {
  children: React.ReactNode;
  weight?: 'medium' | 'normal' | 'semibold' | 'bold';
  size?: 'sm' | 'base' | 'lg' | 'xl' | '2xl';
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
}: Typography) => {
  const fontWeightClass = weightClassMap[weight];
  const sizeClass = sizeClassMap[size];

  return <p className={`${fontWeightClass} ${sizeClass}`}>{children}</p>;
};

export default Typography;
