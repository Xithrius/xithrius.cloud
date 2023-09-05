import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const PostTitle = ({ children }: Props) => {
  return (
    <h1 className="mx-auto mb-3 mt-8 max-w-2xl  text-4xl font-bold leading-tight">{children}</h1>
  );
};

export default PostTitle;
