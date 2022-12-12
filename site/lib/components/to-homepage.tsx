import Link from "next/link";

const ToHomepage = () => {
  return (
    <div className="absolute left-8 top-8 flex justify-center">
      <Link href="/" className="top-0 left-0 text-2xl opacity-50 hover:opacity-100">
        xithrius.cloud
      </Link>
    </div>
  );
};

export default ToHomepage;
