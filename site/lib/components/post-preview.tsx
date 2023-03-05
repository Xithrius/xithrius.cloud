import DateFormatter from "./date-formatter";
import Link from "next/link";

type Props = {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
};

const PostPreview = ({ title, date, excerpt, slug }: Props) => {
  return (
    <Link as={`blog/posts/${slug}`} href="blog/posts/[slug]">
      <div className="card p-5 hover:shadow-xl transition">
        <h3 className="mb-1 text-3xl leading-snug">{title}</h3>
        <div className="opacity-50">
          <p className="mb-1 text-lg leading-relaxed">{excerpt}</p>
          <div className="mb-1 text-lg">
            <DateFormatter dateString={date} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PostPreview;
