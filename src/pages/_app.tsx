import type { AppProps } from 'next/app';
import Header from '../components/Header';
import './global-style.css';
import { Provider } from 'react-redux';
import { store } from '../store/index';
import PageWrapper from '../components/PageWrapper/index';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Header />
      <main>
        <PageWrapper>
          <Component {...pageProps} />
        </PageWrapper>
      </main>
    </Provider>
  );
}
