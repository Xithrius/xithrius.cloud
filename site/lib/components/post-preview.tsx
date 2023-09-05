import DateFormatter from "./date-formatter";
import Link from "next/link";

type Props = {
  title: string;
  date: string;
  slug: string;
};

const PostPreview = ({ title, date, slug }: Props) => {
  return (
    <Link as={`blog/posts/${slug}`} href="blog/posts/[slug]">
      <div className="p-1 pl-4 ">
        <div className="flex flex-row">
          <div className="opacity-50">
            <DateFormatter dateString={date} />
          </div>
          <h3 className="mx-2 underline-offset-2 transition hover:underline">{title}</h3>
        </div>
      </div>
    </Link>
  );
};

export default PostPreview;
