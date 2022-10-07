type Props = {
  href: string;
  item: any;
};

const LinkItem = ({ href, item }: Props) => (
  <a href={href} target="_blank" rel="noreffer">
    {item}
  </a>
);

export default LinkItem;
