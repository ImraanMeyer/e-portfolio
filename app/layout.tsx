import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/theme-provider';
import { Navigation } from '@/components/navigation';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Imraan Meyer | ePortfolio - Computer Science',
  description: 'A collection of coursework, reflections, and assignments',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/favicon.png`} />
      </head>
      <body className={cn(inter.className, "min-h-screen")} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex min-h-screen">
            <Navigation />
            <main className="flex-1 overflow-y-auto ml-72">
              <div className="container mx-auto py-6 px-4">
                {children}
              </div>
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}