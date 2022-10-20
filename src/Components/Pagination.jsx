// 1. Компонент с пагинацией, который рисует кнопки
// 2. Состояние сколько картинок на странице
// 3. В зависимости от этого состояния наклепать столько то кнопок
// 4. Меняется состояние страницы - слайсится и в состояние передается то, что наслайсили

import React from 'react'

export const Pagination = ({lastIndex, setCurrentPage}) => {
    let arr = [];
    for (let i = 1; i < lastIndex; i++) {
        arr.push(i)
    }
    return (
    <footer className="footer">
        <div className="container">
            {arr.map(elem => <button onClick={() => setCurrentPage(elem)}>{elem}</button>)}   
        </div>
    </footer>
  )
}
