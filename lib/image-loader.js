export default function imgixLoader({ src, width, quality }) {
    return `https://m-a-t-412089409.imgix.net${src}?w=${width}&q=${quality || 75}&auto=format`;
  }