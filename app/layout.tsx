import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import { Bai_Jamjuree, Red_Hat_Mono } from 'next/font/google';

const sans = Bai_Jamjuree({
  subsets: ['latin', 'thai'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans-thai',
});

const mono = Red_Hat_Mono({
  subsets: ['latin'],
  variable: '--font-mono-code',
});

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="th" className={`${sans.variable} ${mono.variable}`} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
