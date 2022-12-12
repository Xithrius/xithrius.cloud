import DateFormatter from "./date-formatter";
import PostTitle from "./post-title";
import Link from "next/link";

type Props = {
  title: string;
  date: string;
};

const PostHeader = ({ title, date }: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="mx-auto max-w-2xl">
        <div className="mb-12 text-lg">
          <DateFormatter dateString={date} />
          <Link
            href="/blog"
            className="opacity-50 hover:opacity-100 justify-end text-right items-end flex"
          >
            back
          </Link>
        </div>
      </div>
    </>
  );
};

export default PostHeader;
