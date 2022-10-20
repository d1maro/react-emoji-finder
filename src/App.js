import { useState } from "react";

import { data } from "./emoji.js";

import { Header } from "./Components/Header.jsx";

import { Main } from "./Components/Main.jsx";

import { Card } from "./Components/Card.jsx";

function App() {
  const [value, setValue] = useState("");

  const formHandler = (event) => event.preventDefault();

  const inputHandler = (event) => {
    let userText = event.target.value.toLowerCase().trim();
    setValue(userText);
  };

  const search = data.filter(
    (elem) => elem.keywords.includes(value) || elem.title.includes(value)
  );

  return (
    <>
      <Header value={value} onSubmit={formHandler} onInput={inputHandler} />
      <Main>
        {search.map((elem) => (
          <Card
            key={elem.title}
            symbol={elem.symbol}
            title={elem.title}
            keywords={
              (elem.keywords = [...new Set(elem.keywords.split(" "))].join(" "))
            }
          />
        ))}
      </Main>
    </>
  );
}

export default App;
