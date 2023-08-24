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
      font-['Space_Mono']
      dark:prose-invert
      prose-code:before:content-none
      prose-code:after:content-none
      "
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export default PostBody;
