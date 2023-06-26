import type { AppProps } from 'next/app';
import Header from '../components/Header';
import './global-style.css';
import styled from 'styled-components';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}
