'use client';

import Link from 'next/link';
import Typography from '../../Typography';
import { usePathname } from 'next/navigation';

type ListItemProps = {
  href: string;
  children: React.ReactNode;
};

const ListItem = ({ href, children }: ListItemProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <div>
      <Link href={href}>
        <Typography
          className={`px-5 py-4 ${isActive ? 'bg-blue-500 text-white' : ''}`}
        >
          {children}
        </Typography>
      </Link>
    </div>
  );
};

export default ListItem;
