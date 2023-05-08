import { Html, Head, Main, NextScript } from 'next/document';
import MainPage from '@/components/MainPage';

export default function Document() {
  return (
    <Html lang="ru">
      <Head />
      <body>
        <MainPage>
          <Main />
        </MainPage>
        <NextScript />
      </body>
    </Html>
  )
}
