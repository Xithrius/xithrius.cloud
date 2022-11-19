import Link from "next/link";

const Header = () => {
  return (
    <h2 className="mb-20 mt-8 text-2xl font-bold leading-tight tracking-tight md:text-4xl md:tracking-tighter">
      <Link href="/blog" className="opacity-50 hover:opacity-100">
        blog.xithrius.cloud
      </Link>
    </h2>
  );
};

export default Header;
