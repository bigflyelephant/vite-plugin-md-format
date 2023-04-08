declare module '*.md' {
  const mdHTMLString: string
  const assetURLs: string[]
  const metadata: Object
  const toc: { label: string; level: number }[]
  export { assetURLs, metadata, toc }

  export default mdHTMLString
}
