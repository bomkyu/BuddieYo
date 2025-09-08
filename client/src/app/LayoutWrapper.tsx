'use client';

import { usePathname } from 'next/navigation';
import LeftMenu from './components/leftMenu/LeftMenu';

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const noMenuPaths = ['/login', '/register', '/'];
  const showMenu = !noMenuPaths.includes(pathname);

  return (
    <div style={{ display: 'flex' }}>
      {showMenu && <LeftMenu />}
      <main className='flex-1'>{children}</main>
    </div>
  );
}
