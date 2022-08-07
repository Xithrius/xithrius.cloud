type Props = {
  content: string;
};

const PostBody = ({ content }: Props) => {
  return (
    <div
      className="prose prose-sm mx-auto max-w-2xl prose-code:before:content-none prose-code:after:content-none dark:prose-invert lg:prose-base"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export default PostBody;
