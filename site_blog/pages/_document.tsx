import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body className="bg-light-bg text-light-fg dark:bg-dark-bg dark:text-dark-fg">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
