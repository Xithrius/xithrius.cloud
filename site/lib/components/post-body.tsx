type Props = {
  content: string;
};

const PostBody = ({ content }: Props) => {
  return (
    <div
      className="
      prose
      prose-xith
      mx-auto
      max-w-2xl
      prose-code:before:content-none
      prose-code:after:content-none
      dark:prose-invert
      font-['Space_Mono']
      "
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export default PostBody;
