import { useState } from "react";

import { data } from "./emoji.js";

import { Header } from "./Components/Header.jsx";

import { Main } from "./Components/Main.jsx";

import { Card } from "./Components/Card.jsx";

function App() {
  const [value, setValue] = useState(""); // задаем useState для всего приложения

  const formHandler = (event) => event.preventDefault(); // отменяем перезагрузку страницы при отправке формы

  const inputHandler = (event) => {
    let userText = event.target.value.toLowerCase().trim(); // задаем переменную для значения инпута, сразу приводим к нижнему регистру и удаляем возможные лишние пробелы
    setValue(userText); // задаем значение для функции в useState
  };

  const search = data.filter(
    (elem) => elem.keywords.includes(value) || elem.title.includes(value)
  ); // массив, в который попадают отфильтрованные по поиску данные

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
