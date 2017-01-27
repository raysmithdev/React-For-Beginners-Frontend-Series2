import React from 'react'

const NavBar = (props) => {
  return (
    <div>
      <h1>Hello, {props.name}</h1>
      <p>You have {props.coffees} cups of coffee!</p>
    </div>
  )
}

export default NavBar
