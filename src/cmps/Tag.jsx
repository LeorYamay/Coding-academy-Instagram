import { useNavigate } from "react-router";

export function Tag({ tag }) {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(`/explore/tags/${tag}`);
  };

  return <span className="tag" onClick={onClick}>{`#${tag} `}</span>;
}

export function Tags({ tags }) {
  if (tags.length === 0) {
    return 0;
  } else {
    return (
      <>
        {tags.map((tag) => (
          <Tag tag={tag} key={tag}/>
        ))}
      </>
    );
  }
}
