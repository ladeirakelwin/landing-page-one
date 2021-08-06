import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render() {
    return (
      <Html >
        <Head />
        <body className="bg-gradient-to-r from-indigo-900 to-indigo-800">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument