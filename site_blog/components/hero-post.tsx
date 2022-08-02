import DateFormatter from "./date-formatter";
import Link from "next/link";

type Props = {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
};

const HeroPost = ({ title, date, excerpt, slug }: Props) => {
  return (
    <section>
      <div className="mb-20 md:mb-28 md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8">
        <div>
          <h3 className="mb-4 text-4xl leading-tight lg:text-5xl">
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a className="opacity-50 hover:opacity-100">{title}</a>
            </Link>
          </h3>
          <div className="opacity-50">
            <div>
              <p className="mb-4 text-lg leading-relaxed">{excerpt}</p>
            </div>
            <div className="mb-4 text-lg md:mb-0">
              <DateFormatter dateString={date} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroPost;
