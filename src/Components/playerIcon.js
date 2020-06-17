import React from 'react';

export function PlayerIcon(props) {
    return (
        <button
          className="icons"
          onClick={props.onClick}>
        {props.icon}
        </button>
    );
}
