import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypePrettyCode from "rehype-pretty-code";

export default async function markdownToHtml(markdown: string) {
  const result = await unified()
    .use(remarkParse)
    .use(remarkRehype, { allowDangerousHtml: true })
    // available themes - https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-themes
    .use(rehypePrettyCode, { theme: "one-dark-pro" })
    .use(rehypeStringify)
    .process(markdown);

  return result.toString();
}
