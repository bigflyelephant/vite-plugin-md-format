declare module "*.md" {
  const mdHTMLString: string;
  const assetURLs: string[];
  export { assetURLs };

  export default mdHTMLString;
}
