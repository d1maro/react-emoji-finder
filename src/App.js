import { useState } from "react";

import { data } from "./emoji.js";

import { Header } from "./Components/Header.jsx";

import { Main } from "./Components/Main.jsx";

import { Card } from "./Components/Card.jsx";

import { Pagination } from "./Components/Pagination.jsx";

// import { Select } from "./Components/Select.jsx";

function App() {
  const [value, setValue] = useState(""); // задаем useState для всего приложения

  const [currentPage, setCurrentPage] = useState(1); // задаем useState для текущей страницы

  const [perPage, setPerPage] = useState(12); // задаем useState для количества карточек на странице

  function getPerPage(event) {
    setPerPage(+event.target.value);
    setCurrentPage(1);
  } // функция принимает событие из getPerPage и меняет состояние количества страниц

  const formHandler = (event) => event.preventDefault(); // отменяем перезагрузку страницы при отправке формы

  const inputHandler = (event) => {
    let userText = event.target.value.toLowerCase().trim(); // задаем переменную для значения инпута, сразу приводим к нижнему регистру и удаляем возможные лишние пробелы
    setValue(userText); // задаем значение для функции в useState
  };

  const search = data.filter(
    (elem) => elem.keywords.includes(value) || elem.title.includes(value)
  ); // массив, в который попадают отфильтрованные по поиску данные

  let lastElem = currentPage * perPage; // задаем и вычисляем первый элемент

  let firstElem = lastElem - perPage; // задаем и вычисляем последний элемент

  let arr = search.slice(firstElem, lastElem); // задаем новый массив для вырезанного куска под страницу

  return (
    <>
      <Header value={value} onSubmit={formHandler} onInput={inputHandler} />
      <Main>
        {arr.map((elem) => (
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
      <Pagination
        lastIndex={Math.ceil(search.length / perPage)} // передаем функцию с последним индексом
        setCurrentPage={setCurrentPage} // передаем функцию для текущей страницы
        getPerPage={getPerPage} // передаем функцию для количества выводов на страницу
        currentPage={currentPage} // передаем текущую страницу
      />
    </>
  );
}

export default App;
