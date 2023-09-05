type Props = {
  children?: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return <div className="container mx-auto grid place-content-center py-24">{children}</div>;
};

export default Container;
