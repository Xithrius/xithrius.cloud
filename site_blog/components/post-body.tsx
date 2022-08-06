import markdownStyles from "../styles/markdown-styles.module.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.js"

type Props = {
  content: string;
};

const PostBody = ({ content }: Props) => {
  return (
    <div className="max-w-2xl mx-auto line-numbers">
      <div
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};

export default PostBody;
