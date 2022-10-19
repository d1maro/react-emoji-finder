import React from 'react'
import { data } from '../emoji'

export const Card = () => {
  return (
    <div className="grid__card">
        <div className="card__emoji">{data.symbol}</div>
        <h2 className="card__title">{data.title}</h2>
        <p className="card__description">{data.keywords}</p>
    </div>
  )
}
