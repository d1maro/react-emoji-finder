import React from 'react'

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
