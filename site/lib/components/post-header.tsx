import DateFormatter from "./date-formatter";
import PostTitle from "./post-title";
import TopLeftNavigation from "./top-left-nav";

type Props = {
  title: string;
  date: string;
};

const PostHeader = ({ title, date }: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="mx-auto max-w-2xl ">
        <div className="flex-column mb-12 flex text-lg">
          <DateFormatter dateString={date} />
          <TopLeftNavigation href="/blog">back</TopLeftNavigation>
        </div>
      </div>
    </>
  );
};

export default PostHeader;
