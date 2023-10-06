import '@styles/globals.css';

import Header from '@components/Header';

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
      </body>
    </html>
  );
};

export default RootLayout;
