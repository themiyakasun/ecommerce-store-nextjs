import '@styles/globals.css';

export const metadata = {
  title: 'E-commerce',
  description: 'Next js',
};

import React from 'react';

const RootLayout = ({ children }) => {
  return (
    <html>
      <body></body>
      <main>{children}</main>
    </html>
  );
};

export default RootLayout;
