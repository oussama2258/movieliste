import "./App.css";
import react, { useState } from "react";
import Movielist from "./Component/Movielist/Movielist";
import Caar from "./Component/Carousel";
import Nabar from "./Component/Nabar";
import Search from "./Component/Search/Search";
import Rat from "./Component/Search/Rat";

function App() {
  const [inputSearch, setInputSearch] = useState("");

  return (
    <div className="App">
      <Nabar />
      <h1 className="titrefilm">films</h1>
      {/* <Caar /> */}
      <Search setInputSearch={setInputSearch} />

      <Movielist inputSearch={inputSearch} />
    </div>
  );
}

export default App;
