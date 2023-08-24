import Link from "next/link";

type Props = {
  children?: React.ReactNode;
  href: string;
};

const TopLeftNavigation = ({ children, href }: Props) => {
  return (
    <div className="absolute left-8 top-8 flex justify-center">
      <Link href={href} className="left-0 top-0 text-4xl opacity-50 transition hover:opacity-100">
        {children}
      </Link>
    </div>
  );
};

export default TopLeftNavigation;
