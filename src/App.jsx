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

  // 2–5: Fetch from API when searchTerm changes
  React.useEffect(() => {
    if (!searchTerm) return;

    fetch(`${API_ENDPOINT}${searchTerm}`)
      .then((response) => response.json())
      .then((result) => {
        setStories(result.hits); // 5: update stories
      })
      .catch(() => {
        // Handle error (optional for now)
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

  // 6: Remove filteredList — stories now come from API
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
      {/* 6: Pass API-fetched stories directly */}
      <List list={stories} onRemoveItem={handleRemoveStory} />
    </div>
  );
}

export default App;
