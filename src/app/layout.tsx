import './globals.css';

import { Metadata } from 'next';
import { PropsWithChildren } from 'react';

import { className } from '@/utils/className';
import { interFont, playfairFont } from '@/utils/fonts';

export const metadata: Metadata = {
  title: 'Starry',
  description:
    'Generate pictures based on Van Gogh arts via AI model. Powered by Vercel and Replicate.',
  // TODO - Update URL with correct domain
  // TODO - Implement OG social image
  metadataBase: new URL('https://starry.vercel.app'),
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body
        className={className(
          'bg-starry-blue',
          playfairFont.variable,
          interFont.variable,
        )}
      >
        <main>{children}</main>
      </body>
    </html>
  );
}
