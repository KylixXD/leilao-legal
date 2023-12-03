import { SessionProvider } from 'next-auth/react';
import { AppProps } from 'next/app';
import NavBar from './components/layout/header/NavBar';

export default function MyApp() {
    return (
      <SessionProvider session={pageProps.session}>
        {/* Your other components or pages */}
        <NavBar />
      </SessionProvider>
    );
  }

