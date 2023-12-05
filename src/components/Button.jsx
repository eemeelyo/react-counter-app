import React from 'react'

export default function Button({text, classes, onClick}) {
  return (
    <button className={`--btn --btn-${classes}`} onClick={onClick}>
      {!text ? "Butones" : text}
    </button>
  );
}
