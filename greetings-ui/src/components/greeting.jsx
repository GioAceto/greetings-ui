import React, { useState } from 'react';

const Greeting = () => {
  const [name, setName] = useState('')

  return (
    <div className="container">
      <h1 className="title">To whom am I speaking?</h1>
      <input className="box" type="text" name="search" onChange={event =>
        setName(event.target.value)} />
      <div className="name">{name ? `It's nice to meet you ${name}` : null}</div>
    </div>
  )

}

export default Greeting;