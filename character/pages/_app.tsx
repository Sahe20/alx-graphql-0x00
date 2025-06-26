import React from 'react';
import { ApolloProvider } from '@apollo/client';
import client from '../pages/apolloClient';

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
