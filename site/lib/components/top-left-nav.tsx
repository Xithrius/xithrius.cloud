import Link from "next/link";

type Props = {
  children?: React.ReactNode;
  href: string;
};

const TopLeftNavigation = ({ children, href }: Props) => {
  return (
    <div className="absolute left-8 top-8 flex justify-center">
      <Link href={href} className="top-0 left-0 text-2xl opacity-50 transition hover:opacity-100">
        {children}
      </Link>
    </div>
  );
};

export default TopLeftNavigation;
