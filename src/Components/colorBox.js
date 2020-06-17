import React from 'react';

export function ColorBox(props) {

  const mystyle = {
    backgroundColor: props.hexCode,
  };
    return (
        <button
          className="color-box"
          style={mystyle}
          onClick={props.onClick}>
        </button>
    );
}
