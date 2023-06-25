import React from "react";

function Node(props) {
  return (
    <td
      key= {props.key}
      className={props.class}
      id={props.id}
      value={props.value}
    ></td>
  );
}

export default Node;
