import { themeClass } from '@demo/ui/theme';
import Document, { Head, Html, Main, NextScript } from 'next/document';

class VMDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body className={themeClass}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default VMDocument;
