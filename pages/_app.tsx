import * as React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
// import { ThemeProvider } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
// import theme from '../src/theme';
import createEmotionCache from '../src/createEmotionCache';

import ThemeConfig from '../src/theme';
import GlobalStyles from '../src/theme/globalStyles';
// components
import ScrollToTop from '../src/components/ScrollToTop';
import { BaseOptionChartStyle } from '../src/components/charts/BaseOptionChart';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const getLayout = (Component as any).getLayout || ((page: any) => page);
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>My page</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeConfig>
        {getLayout(<Component {...pageProps} />)}
        <ScrollToTop />
        <GlobalStyles />
        <BaseOptionChartStyle />
      </ThemeConfig>
    </CacheProvider>
  );
}
