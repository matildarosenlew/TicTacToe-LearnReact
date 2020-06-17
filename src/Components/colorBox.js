import React from 'react';

export const ColorBox = (props) => {

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
