import React from 'react'

const ListItem = (props) => {
  
  return (
    <li style={{listStyleType: 'none', display: 'flex', alignItems: 'center'}}>
      <input type="checkbox" checked={props.checked}/>
      <span>{props.title}</span>
      <button style={{marginLeft: '10px'}}>Delete</button>
    </li>
  );
}

export default ListItem