import * as React from "react";

// 1. Define the API endpoint
const API_ENDPOINT = "https://hn.algolia.com/api/v1/search?query=";

const InputWithLabel = ({ id, value, onInputChange, type = "text", children }) => {
  return (
    <div>
      <label htmlFor={id}>{children}</label>
      <input id={id} type={type} value={value} onChange={onInputChange} />
      <p>
        Searching for: <strong>{value}</strong>
      </p>
    </div>
  );
};

const Item = ({ item, onRemoveItem }) => {
  const { url, title, author, num_comments, points } = item;

  return (
    <li>
      <span><a href={url}>{title}</a></span>
      <span> — {author}</span>
      <span> | {num_comments} comments</span>
      <span> | {points} points</span>
      <span>
        {" "}
        <button type="button" onClick={() => onRemoveItem(item)}>
          Delete
        </button>
      </span>
    </li>
  );
};

const List = ({ list, onRemoveItem }) => {
  return (
    <ul>
      {list.map((item) => (
        <Item key={item.objectID} item={item} onRemoveItem={onRemoveItem} />
      ))}
    </ul>
  );
};

function App() {
  const [searchTerm, setSearchTerm] = React.useState(
    localStorage.getItem("search") || ""
  );
  const [stories, setStories] = React.useState([]);

  // 9. Add isLoading and isError states
  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);

  // 2–5, 9–11: useEffect for fetching data
  React.useEffect(() => {
    if (!searchTerm) return;

    setIsLoading(true);
    setIsError(false); // Reset before new fetch

    fetch(`${API_ENDPOINT}${searchTerm}`)
      .then((response) => response.json())
      .then((result) => {
        setStories(result.hits);
        setIsLoading(false);
      })
      .catch(() => {
        setIsError(true);
        setIsLoading(false);
      });
  }, [searchTerm]);

  React.useEffect(() => {
    localStorage.setItem("search", searchTerm);
  }, [searchTerm]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleRemoveStory = (item) => {
    const newStories = stories.filter(
      (story) => story.objectID !== item.objectID
    );
    setStories(newStories);
  };

  return (
    <div>
      <h1>My Hacker Stories</h1>

      <InputWithLabel
        id="search"
        value={searchTerm}
        onInputChange={handleSearch}
      >
        <strong>Search: </strong>
      </InputWithLabel>

      <hr />

      {/* 12: Conditional rendering with && and ternary */}
      {isError && <p>Something went wrong ...</p>}

      {isLoading ? (
        <p>Loading ...</p>
      ) : (
        <List list={stories} onRemoveItem={handleRemoveStory} />
      )}
    </div>
  );
}

export default App;
