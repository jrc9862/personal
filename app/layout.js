import '../styles/globals.css';

export const metadata = {
  title: 'Personal Website',
  description: 'A minimalist personal website built with Next.js',
  metadataBase: new URL('https://your-domain.com'),
  openGraph: {
    title: 'Personal Website',
    description: 'A minimalist personal website built with Next.js',
    url: 'https://your-domain.com',
    siteName: 'Personal Website',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
