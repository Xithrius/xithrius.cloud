type Props = {
  children?: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return <div className="container mx-auto place-content-center grid my-24">{children}</div>;
};

export default Container;
