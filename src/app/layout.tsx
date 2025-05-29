import './globals.css';

import Header from '@/components/header';
import WhatsappButton from '@/components/whatsAppButton/indext';
import Footer from '@/sections/banners';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
        {/* <WhatsappButton />
        <Footer/> */}
      </body>
    </html>
  );
}
