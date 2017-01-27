import React from 'react'

const MainBody = (props) => (
  <div>
    <p>{props.text}</p>
    <button onClick={() => props.changeName('James')}>Change Name</button>
  </div>
)

export default MainBody
