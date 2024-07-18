import '@mantine/core/styles.css';
import React from 'react';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { theme } from '../theme';

export const metadata = {
  title: 'Mantine Next.js template',
  description: 'I am using Mantine with Next.js!',
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        {/*
          TODO
          hydration mismatch when client head render, so for now we move it to body.
          probably this is due to how we manage ssr head.
          It seems Next.js somehow tolorates client head render, so probably there's some trick.
          Probably Ideally Maintine should ship `ColorSchemeScript` as server component
          and that would probably be more robust against hydration error (also reduces client assets).
        */}
        <ColorSchemeScript />
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </body>
    </html>
  );
}
