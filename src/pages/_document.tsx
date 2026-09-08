import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

const THEME_INIT_SCRIPT = `(function () {
  try {
    var stored = localStorage.getItem('mobfacil-theme');
    var isDark = stored === 'dark';
    if (isDark) document.documentElement.classList.add('dark');
  } catch (e) {}
})();`

interface DocumentProps {
  locale: string
}

export default class MyDocument extends Document<DocumentProps> {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    const pathname = ctx.pathname || ''
    let locale = 'pt-BR'
    if (pathname.startsWith('/en')) locale = 'en'
    else if (pathname.startsWith('/es')) locale = 'es'
    return { ...initialProps, locale }
  }

  render() {
    const { locale } = this.props

    return (
      <Html lang={locale}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
