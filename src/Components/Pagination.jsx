// 1. Компонент с пагинацией, который рисует кнопки
// 2. Состояние сколько картинок на странице
// 3. В зависимости от этого состояния наклепать столько то кнопок
// 4. Меняется состояние страницы - слайсится и в состояние передается то, что наслайсили

import React from 'react'

export const Pagination = ({lastIndex, setCurrentPage, getPerPage, currentPage}) => {
    let arr = [];
    for (let i = 1; i <= lastIndex; i++) {
        arr.push(i)
    }

    // механизм для простой пагинации: создаем новый массив и на основе currentPage вычисляем 5 кнопок для отрисовки

    let firstNumber = currentPage;
    let lastNumber = currentPage + 4;

    let arr2 = arr.slice(firstNumber - 1, lastNumber);

    return (
    <footer className="footer">
        <div className="container pagination">
            <div className="pagination__pages">
                <button className="pagination__button" onClick={() => setCurrentPage(1)}>First</button>

                <button disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)} className="pagination__button">Prev</button>

                {arr2.map((elem, index) => <button key={index} className="pagination__button" onClick={() => setCurrentPage(elem)}>{elem}</button>)}

                <button disabled={currentPage === lastIndex} onClick={() => setCurrentPage(currentPage + 1)} className="pagination__button">Next</button>

                <button className="pagination__button" onClick={() => setCurrentPage(lastIndex)}>Last</button>
            </div>
            <div className="pagination__select">
            <label htmlFor="select" className="pagination__label">Per Page</label>
                <select id="select" className="pagination__area" onChange={getPerPage}>
                    <option value={12}>12</option>
                    <option value={24}>24</option>
                    <option value={48}>48</option>
                </select> 
            </div>
        </div>
    </footer>
  )
}
