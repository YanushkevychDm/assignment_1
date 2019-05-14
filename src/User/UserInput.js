import React from 'react';
import './UserInput.css';

const UserInput = (props) => { 
  return (
    <input 
      type="text" 
      className='input' 
      onChange={props.changed} 
      value={props.username}
    />
  );
}

export default UserInput;