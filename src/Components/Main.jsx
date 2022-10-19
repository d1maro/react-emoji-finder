import React from 'react'

import { data } from '../emoji.js';

import { Card } from "./Card.jsx";

export const Main = () => {
  return (
    <main className="main">
        <div className="container">
            <section className="grid__container">
                {data.map((elem) => <Card key={elem.title} symbol={elem.symbol} title={elem.title} keywords={elem.keywords} />)}
            </section>
        </div>
    </main>
  )
}
