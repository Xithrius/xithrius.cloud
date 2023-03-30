type Props = {
  children?: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return <div className="container mx-auto my-24 grid place-content-center">{children}</div>;
};

export default Container;
