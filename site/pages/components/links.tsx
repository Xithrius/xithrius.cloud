const LinkItem = ({ href, item, tailwind }) => {
  return (
    <a href={href} target="_blank" rel="noreferrer" className={tailwind}>
      {item}
    </a>
  );
};

export default LinkItem;
