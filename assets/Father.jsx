import React from 'react'

const Father = ({ name, surname }) => {
  return (
    <div>
      <h1>MY FATHER</h1>
      <p>Name: {name}</p>
      <p>Surname: {surname}</p>
    </div>
  )
}

export default Father