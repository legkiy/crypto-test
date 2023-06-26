import type { AppProps } from 'next/app';
import Header from '../components/Header';
import './global-style.css';
import { Provider } from 'react-redux';
import { store } from '../store/index';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
    </Provider>
  );
}
