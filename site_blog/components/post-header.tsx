import DateFormatter from "./date-formatter";
import PostTitle from "./post-title";

type Props = {
  title: string;
  date: string;
};

const PostHeader = ({ title, date }: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:mb-12 md:block"></div>
      <div className="mx-auto max-w-2xl">
        <div className="mb-6 block md:hidden"></div>
        <div className="mb-6 text-lg">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  );
};

export default PostHeader;
