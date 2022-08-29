import * as React from 'react';



import createEmotionCache from '../src/createEmotionCache';
import {useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ThemeProvider from 'react-bootstrap/ThemeProvider'
// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();
import { StylesProvider, createGenerateClassName } from '@mui/styles';

const generateClassName = createGenerateClassName({
  productionPrefix: 'c',
});

export default function MyApp(props) {


  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
<ThemeProvider
  breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
  minBreakpoint="xs"
>
<Component {...pageProps} />
</ThemeProvider>
     
 

  );
}

