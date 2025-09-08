import type { Metadata } from 'next';
import localFont from 'next/font/local';

import './globals.css';
import LayoutWrapper from './LayoutWrapper';

const predendard = localFont({
  src: [
    {
      path: './fonts/Pretendard-Medium.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Pretendard-Regular.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/Pretendard-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/Pretendard-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
});

export const metadata: Metadata = {
  title: 'BuddieYo',
  description: "Let's make travel plans with our friends!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={predendard.className}>
        <LayoutWrapper>{children}</LayoutWrapper>
        <div id='modal-layout'></div>
      </body>
    </html>
  );
}
