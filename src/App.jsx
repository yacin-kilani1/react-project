import * as React from "react";

// InputWithLabel replaces Search (more reusable)
const InputWithLabel = ({ id, value, onInputChange, type = "text", children }) => {
  console.log("InputWithLabel renders");

  return (
    <div>
      <label htmlFor={id}>{children}</label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onInputChange}
      />
      <p>
        Searching for: <strong>{value}</strong>
      </p>
    </div>
  );
};

const Item = ({ item: { url, title, author, num_comments, points } }) => {
  console.log("Item renders");
  return (
    <li>
      <span>
        <a href={url}>{title}</a>
      </span>
      <span> — {author}</span>
      <span> | {num_comments} comments</span>
      <span> | {points} points</span>
    </li>
  );
};

const List = ({ list }) => {
  console.log("List renders");
  return (
    <ul>
      {list.map((item) => (
        <Item key={item.objectID} item={item} />
      ))}
    </ul>
  );
};

function App() {
  console.log("App renders");

  const [searchTerm, setSearchTerm] = React.useState(
    localStorage.getItem("search") || ""
  );

  React.useEffect(() => {
    localStorage.setItem("search", searchTerm);
  }, [searchTerm]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const stories = [
    {
      title: "React",
      url: "https://reactjs.org/",
      author: "Jordan Walke",
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: "Redux",
      url: "https://redux.js.org/",
      author: "Dan Abramov, Andrew Clark",
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];

  const filteredList = stories.filter((item) =>
    item.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
      <List list={filteredList} />
    </div>
  );
}

export default App;