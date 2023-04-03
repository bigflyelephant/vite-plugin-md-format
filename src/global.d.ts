declare module "*.md" {
  const mdHTMLString: string;
  const assetURLs: string[];
  const metadata: Object
  export { assetURLs, metadata };

  export default mdHTMLString;
}
