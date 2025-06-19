import * as React from "react";

// Step 8: Log when Item renders
const Item = ({ item }) => {
  console.log("Item renders");
  return (
    <li>
      <span>
        <a href={item.url}>{item.title}</a>
      </span>
      <span>{item.author}</span>
      <span>{item.num_comments} comments</span>
      <span>{item.points} points</span>
    </li>
  );
};

// Step 8: Log when List renders
const List = (props) => {
  console.log("List renders");
  return (
    <ul>
      {props.list.map((item) => (
        <Item key={item.objectID} item={item} />
      ))}
    </ul>
  );
};

// Step 7: Display searchTerm + Step 8: Log Search renders
const Search = ({ searchTerm, onSearch }) => {
  console.log("Search renders");

  const handleChange = (event) => {
    console.log(event.target.value);
    onSearch(event.target.value);
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

function App() {
  console.log("App renders"); // Step 8

  // Step 6: useState for searchTerm
  const [searchTerm, setSearchTerm] = React.useState("");

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
      <Search searchTerm={searchTerm} onSearch={setSearchTerm} />
      <hr />
      <List list={filteredList} />
    </div>
  );
}

export default App;