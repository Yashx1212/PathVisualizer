import React from "react";

function Node(props) {

  return (
    <td
    className={props.class}
      id={props.id}
      value={props.value}
      onMouseDown={() => props.handleOnMouseDown(props.row, props.col)}
    ></td>
  );
}

export default Node;
