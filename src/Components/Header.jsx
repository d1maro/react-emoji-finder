import React from 'react'

export const Header = ( { onSubmit, onInput, value } ) => {
  return (
    <header className="header">
        <div className="container">
            <h1 className="header__title">Emoji Finder</h1>
            <p className="header__description">Find emoji by keywords</p>
            <form onSubmit={onSubmit} className="header__search" action="">
                <input onInput={onInput} value={value} type="text" className="header__input" placeholder="Type your keywords here..." />
            </form>
        </div>
    </header>
  )
}
