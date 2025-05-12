import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const playfair = Playfair_Display({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'LEMON Fine Dine Restaurant',
  description: 'Experience exquisite dining at LEMON, featuring Indian, Chinese, Continental, and Tandoor cuisines.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={`${playfair.variable} font-sans`}>{children}</div>
      </body>
    </html>
  );
}