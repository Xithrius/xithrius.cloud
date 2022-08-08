type Props = {
  content: string;
};

const PostBody = ({ content }: Props) => {
  return (
    <div
      className="
      prose
      mx-auto
      max-w-2xl
      prose-code:before:content-none
      prose-code:after:content-none
      prose-xith
      dark:prose-invert
      "
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export default PostBody;
