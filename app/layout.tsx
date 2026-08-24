import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'Full Stack Developer & AI Engineer | Portfolio',
  description: 'Professional portfolio of a Full Stack Developer and AI Engineer specializing in TypeScript, Next.js, Serverless AWS, and Gemini AI workflows.',
  openGraph: {
    title: 'Full Stack Developer & AI Engineer | Portfolio',
    description: 'Specializing in TypeScript, Next.js, Serverless AWS, and Gemini AI workflows.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Full Stack Developer & AI Engineer | Portfolio',
    description: 'Specializing in TypeScript, Next.js, Serverless AWS, and Gemini AI workflows.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
