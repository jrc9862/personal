import '../styles/globals.css';

export const metadata = {
  title: "James' Personal Website",
  description: "A minimalist personal website built with Next.js.",
  metadataBase: 'https://collett.land',
  openGraph: {
    title: "James' Personal Website",
    description: "",
    url: 'https://collett.land',
    siteName: "James' Personal Website",
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
