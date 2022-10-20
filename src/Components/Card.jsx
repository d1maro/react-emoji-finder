import React from 'react'

// здесь передаем карточке пропсы символ, тайтл и ключевые слова

export const Card = ({symbol, title, keywords }) => {
  return (
    <div className="grid__card">
        <div className="card__emoji">{symbol}</div>
        <h2 className="card__title">{title}</h2>
        <p className="card__description">{keywords}</p>
    </div>
  )
}
