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
        <div className="flex-column mb-12 flex text-lg">
          <DateFormatter dateString={date} />
          <Link
            href="/blog"
            className="ml-auto mr-5 underline decoration-dashed underline-offset-auto opacity-50 hover:opacity-100"
          >
            back
          </Link>
        </div>
      </div>
    </>
  );
};

export default PostHeader;
