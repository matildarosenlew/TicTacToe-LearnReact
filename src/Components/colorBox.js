import React from 'react';

export function ColorBox(props) {
    return (
        <button
          className="color-box"
          onClick={props.onClick}>
        {props.hexCode}
        </button>
    );
}
