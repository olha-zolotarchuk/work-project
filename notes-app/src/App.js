import React from "react";


// import SearchBox from "./components/SearchBox";
// import Workspace from "./components/Workspace";
import Sidebar from "./components/Sidebar";
import NavPage from "./Nav";

const note = [
  {
    id: 1,
    title: "First Note",
    content: "This is the content of the first note",
  },
  {
    id: 2,
    title: "Second Note",
    content: "This is the content of the second note",
  },
  {
    id: 3,
    title: "Third Note",
    content: "This is the content of the third note",
  },
];

const App = () => {

  return (
    <div className="app">
      <NavPage/>
      <Sidebar
        notes={note}

      />
    </div>
  );
};

export default App;
