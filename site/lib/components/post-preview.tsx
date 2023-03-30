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
      <div className="card p-5 transition hover:shadow-xl">
        <h3 className="mb-1 text-3xl leading-snug">{title}</h3>
        <div className="opacity-50">
          <div className="text-lg">
            <DateFormatter dateString={date} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PostPreview;
