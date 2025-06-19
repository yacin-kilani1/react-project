import * as React from "react";

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

const Search = ({ searchTerm, onSearch }) => {
  console.log("Search renders");

  const handleChange = (event) => {
    console.log(event.target.value);
    onSearch(event);
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
      <p>
        Searching for: <strong>{searchTerm}</strong>
      </p>
    </div>
  );
};

function App() {
  console.log("App renders");

  const [searchTerm, setSearchTerm] = React.useState("");

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
      <Search searchTerm={searchTerm} onSearch={handleSearch} />
      <hr />
      <List list={filteredList} />
    </div>
  );
}

export default App;