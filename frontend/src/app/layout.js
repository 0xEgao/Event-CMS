export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <head>
          <title>EventFlow</title>
        </head>
        <body className="min-h-screen">{children}</body>
      </html>
    );
  }
  