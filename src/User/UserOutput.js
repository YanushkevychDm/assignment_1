import React from 'react';

const UserOutput = (props) => {
  const wrap = {
    border: '1px solid #steelblue',
    borderRadius: '5px',
    background: 'steelblue',
    color: '#fff',
    width: '100%',
    margin: '10px auto',
    padding: '20px',
    boxSizing: 'border-box'
  }

  const name = {
    color: 'yellow',
    fontWeight: 'bold'
  }


  return (
    <div style={wrap}>
      <p style={name}>{props.username}</p>
      <p>{props.children}</p>
    </div>
  )
}

export default UserOutput;