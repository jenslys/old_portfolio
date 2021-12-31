import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="stylesheet" href="https://use.typekit.net/utb0vnu.css" />
          <link href="/static/favicons/favicon.ico" rel="shortcut icon" />

          <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
          <meta
            content="#000000"
            name="theme-color"
            media="(prefers-color-scheme: dark)"
          />
          <meta
            content="#ffffff"
            name="theme-color"
            media="(prefers-color-scheme: light)"
          />

          <link rel="canonical" href="https://lystad.io" />
        </Head>
        <body className="bg-white dark:bg-black text-white dark:text-black">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
