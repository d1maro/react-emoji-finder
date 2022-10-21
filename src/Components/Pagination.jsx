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
    return (
    <footer className="footer">
        <div className="container pagination">
            <div className="pagination__pages">
                <button className="pagination__button" onClick={() => setCurrentPage(currentPage = 1)}>First</button>
                {arr.map(elem => <button className="pagination__button" onClick={() => setCurrentPage(elem)}>{elem}</button>)}
                <button className="pagination__button" onClick={() => setCurrentPage(lastIndex)}>Last</button>
            </div>
            <div className="pagination__select">
            <label for="select">Per Page</label>
                <select id="select" className="pagination__button" onChange={getPerPage}>
                    <option value={12}>12</option>
                    <option value={24}>24</option>
                    <option value={48}>48</option>
                </select> 
            </div>
        </div>
    </footer>
  )
}
