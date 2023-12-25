import type { AppProps } from 'next/app';
import Header from '../components/Header';
import PageWrapper from '../components/PageWrapper/index';
import { Provider } from 'react-redux';
import { store } from '../store/index';
import './global-style.css';

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
