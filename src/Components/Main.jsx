import React from 'react'
// здесь задали children внутри секции, чтобы остальные компоненты вставлялись именно туда
export const Main = ({children}) => {
  return (
    <main className="main">
        <div className="container">
            <section className="grid__container">
                {children}
            </section>
        </div>
    </main>
  )
}
