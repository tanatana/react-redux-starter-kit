import React from 'react'
import { IndexLink, Link } from 'react-router'
import './Header.scss'

export const Header = () => (
  <div>
    <h1>React Redux Starter Kit</h1>
    <IndexLink to='/' activeClassName='route--active'>
      Home
    </IndexLink>
    {' · '}
    <Link to='/counter' activeClassName='route--active'>
      Counter
    </Link>
    {' · '}
    <Link to='/auth' activeClassName='route--active'>
      Auth
    </Link>
    {' · '}
    <Link to='/vital/counter' activeClassName='route--active'>
      Vital Counter
    </Link>
    {' · '}
    <Link to='/vaital/no-exist' activeClassName='route--active'>
      Vital 404
    </Link>
  </div>
)

export default Header
