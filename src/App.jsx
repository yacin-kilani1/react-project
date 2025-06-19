import * as React from "react";

// ✅ New Item component
const Item = ({ item }) => (
  <li>
    <span>
      <a href={item.url}>{item.title}</a>
    </span>
    <span>{item.author}</span>
    <span>{item.num_comments} comments</span>
    <span>{item.points} points</span>
  </li>
);

// ✅ List uses Item
const List = (props) => (
  <ul>
    {props.list.map((item) => (
      <Item key={item.objectID} item={item} />
    ))}
  </ul>
);

const Search = ({ searchTerm, onSearch }) => {
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
    </div>
  );
};

function App() {
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