import "./Tag.css";

export default function Tag({ tagName, selectTag, selected }) {
  const tagStyle = {
    HTML: { backgroundColor: "#fda821" },
    CSS: { backgroundColor: "#15d4c8" },
    JavaScript: { backgroundColor: "#ffd12c" },
    REACT: { backgroundColor: "#4cdafc" },
    default: { backgroundColor: "#f9f9f9" },
  };

  return (
    <button
      type="button"
      onClick={() => selectTag(tagName)}
      className="tag"
      //style={{ backgroundColor: "red", color: "white" }}
      style={selected ? tagStyle[tagName] : tagStyle.default}
    >
      {tagName}
    </button>
  );
}
