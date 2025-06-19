import * as React from "react";

// Item component
const Item = ({ item }) => {
  console.log("Item renders");
  return (
    <li>
      <span>
        <a href={item.url}>{item.title}</a>
      </span>
      <span> — {item.author}</span>
      <span> | {item.num_comments} comments</span>
      <span> | {item.points} points</span>
    </li>
  );
};

// List component
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

// Search component
const Search = ({ searchTerm, onSearch }) => {
  console.log("Search renders");

  const handleChange = (event) => {
    console.log(event.target.value);
    onSearch(event); // calls the handler in App
  };

  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input
        id="search"
        type="text"
        value={searchTerm}
        onChange={handleChange}
      />
      <p>Searching for: <strong>{searchTerm}</strong></p>
    </div>
  );
};

// App component
function App() {
  console.log("App renders");

  // Step 6: searchTerm state
  const [searchTerm, setSearchTerm] = React.useState("");

  // Step 10: callback handler in App
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // Step 1: moved list into App
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

  // Step 14 & 15: case-insensitive filtering by author
  const filteredList = stories.filter((item) =>
    item.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>My Hacker Stories</h1>
      <Search searchTerm={searchTerm} onSearch={handleSearch} />
      <hr />
      <List list={filteredList} />
    </div>
  );
}

export default App;
