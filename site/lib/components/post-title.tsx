import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const PostTitle = ({ children }: Props) => {
  return (
    <h1 className="mx-auto mt-8 mb-3 max-w-2xl text-4xl font-bold leading-tight">{children}</h1>
  );
};

export default PostTitle;
