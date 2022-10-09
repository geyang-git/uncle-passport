import Document, {DocumentContext, Head, Main, NextScript} from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return {...initialProps}
  }

  render() {
    return (
      <html>
      <Head>
        <title>Uncle Passport | The expert in migration </title>
      </Head>
      <body theme-mode="dark">
      <Main/>
      <NextScript/>
      </body>
      </html>
    )
  }
}
