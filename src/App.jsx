import * as React from "react";
const list = [
  {
    title: "React",
    url: "https://reactjs.org/",
    author: "Jordan Walke",
    num_comment: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: "Redux",
    url: "https://redux.js.org/",
    author: "Dan Abramov, Andrew Clark",
    num_comment: 2,
    points: 5,
    objectID: 1,
  },
];

function App() {
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}



function App() {
  const title = "React";
  return (
    <div>
      <h1>Hello {title}</h1>
    </div>
  );
}



const title = "React";
function App() {
  return (
    <div>
      <h1>Hello {title}</h1>
    </div>
  );
}


const title = "React";

function App() {
  return (
    <div>
      <h1>Hello {title}</h1>
    </div>
  );
}


const title = "React";

function App() {
  return (
    <div>
      <h1>Hello {title}</h1>
      <label htmlFor="search">Search</label>
      <h1>My Hacker Stories</h1>
      <label htmlFor="search">Search:</label>
      <input id="search" type="text" />
      <hr />
      <ul>
        {list.map(function (item) {
          return <li key={item.objectID}>{item.title}</li>;
        })}
      </ul>
    </div>
  );
}



const volume = {
  greeting: "Hello",
  title: "React",
};

function App() {
  return (
    <div>
      <h1>{volume.greeting} {volume.title}</h1>
      <label htmlFor="search">Search</label>
      <h1>My Hacker Stories</h1>
      <label htmlFor="search">Search:</label>
      <input id="search" type="text" />
      <hr />
      <ul>
        {list.map(function (item) {
          return <li key={item.objectID}>{item.title}</li>;
        })}
      </ul>
    </div>
  );
}



function getTitle(title) {
  return title;
}

function App() {
  return (
    <div>
      <h1>Hello {getTitle("React")}</h1>
      <label htmlFor="search">Search</label>
      <h1>My Hacker Stories</h1>
      <label htmlFor="search">Search:</label>
      <input id="search" type="text" />
      <hr />
      <ul>
        {list.map(function (item) {
          return (
            <li key={item.objectID}>
              <span>
                <a href={item.url}>{item.title}</a>
              </span>
              <span>{item.author}</span>
              <span>{item.num_comment}</span>
              <span>{item.points}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}


function getTitle(title) {
  return title;
}
function App() {
  return (
    <div>
      <h1>Hello {getTitle("react")}</h1>
      <label htmlFor="search">Search:</label>Add commentMore actions
      <input id="search" type="text"></input>
    </div>
  );
}
export default App;
