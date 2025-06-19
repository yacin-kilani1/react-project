import * as React from "react";

const list = [
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

function List({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.objectID}>
          <span>
            <a href={item.url}>{item.title}</a>
          </span>
          <span>{item.author}</span>
          <span>{item.num_comments} comments</span>
          <span>{item.points} points</span>
        </li>
      ))}
    </ul>
  );
}

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

  const filteredList = list.filter((item) =>
    item.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>My Hacker Stories</h1>
      <Search searchTerm={searchTerm} onSearch={setSearchTerm} />
      <hr />
      <List items={filteredList} />
    </div>
  );
}

export default App;
