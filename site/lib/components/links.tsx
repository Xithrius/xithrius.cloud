interface LinkElemProps {
  href: string;
  elem: JSX.Element | string;
  className?: string;
}

const LinkElem = ({ href, elem, className }: LinkElemProps) => (
  <a href={href} rel="noreferrer" className={className}>
    {elem}
  </a>
);

export default LinkElem;
