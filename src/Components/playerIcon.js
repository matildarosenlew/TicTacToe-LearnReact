import React from 'react';

export const PlayerIcon = (props) => {
    return (
        <button
          className="icons"
          onClick={props.onClick}>
        {props.icon}
        </button>
    );
}
