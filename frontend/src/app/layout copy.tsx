import React, { ReactNode } from "react";

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>EventFlow</title>
      </head>
      <body className="min-h-screen">{children}</body>
    </html>
  );
};

export default RootLayout;
