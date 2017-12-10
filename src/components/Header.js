import React from "react"
import "../css/Header.css"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div>
      <h1 className="header--title"> Pantler </h1>
      <ul>
        <li>
          <Link to="/">Ingredient Dashboard</Link>
        </li>
        <li>
          <Link to="/gridview">Ingredient Grid View</Link>
        </li>
      </ul>
    </div>
  )
}

export default Header
