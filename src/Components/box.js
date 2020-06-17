import React from 'react';

export const Box = (props) => {

  const mystyle = {
    backgroundColor: props.boardColor,
    border: '1px solid' + props.border,

  };
    return (
        <button
          className="box"
          style={mystyle}
          onClick={props.onClick}>
        {props.value}
        </button>
    );
}
