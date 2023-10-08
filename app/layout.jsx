import '@styles/globals.css';

import Header from '@components/Header';
import Footer from '@components/Footer';

export const metadata = {
  title: 'E-commerce',
  description: 'Next js',
};

import React from 'react';

const RootLayout = ({ children }) => {
  return (
    <html>
      <body>
        <header>
          <Header />
        </header>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
};

export default RootLayout;
