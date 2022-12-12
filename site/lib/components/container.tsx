type Props = {
  children?: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return <div className="container mx-auto place-content-center grid">{children}</div>;
};

export default Container;
