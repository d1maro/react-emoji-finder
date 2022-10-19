import React from 'react'

import { Form } from "./Form.jsx"

export const Header = () => {
  return (
    <header className="header">
        <div className="container">
            <h1 className="header__title">Emoji Finder</h1>
            <p className="header__description">Find emoji by keywords</p>
            <Form />
        </div>
    </header>
  )
}
