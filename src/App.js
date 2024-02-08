import "./App.css";
import Bookpage from "./Bookpage";
import { books } from "./book";

function App() {
  return (
    <>
      <h1 className="title">Trending Books</h1>
      <div className="App">
        {books.map((book, index) => {
          return <Bookpage {...book} key={index} />;
        })}
      </div>
    </>
  );
}

export default App;
