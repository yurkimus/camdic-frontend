import Document, { DocumentContext } from 'next/document'

import { ServerStyleSheet } from 'styled-components'

export default class _Document extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()

    const page = ctx.renderPage({
      enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />)
    })

    const styles = sheet.getStyleElement()

    return { ...page, styles }
  }
}
