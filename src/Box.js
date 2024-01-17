import React from "react";

function Box({
  id,
  handleRemove,
  width = 5,
  height = 5,
  backgroundColor = "teal",
}) {
  const remove = () => handleRemove(id);
  return (
    <div align="center">
      <br></br>
      <div
        style={{
          height: `${height}em`,
          width: `${width}em`,
          backgroundColor,
        }}
      />
      <br></br>
      <button onClick={remove}>Remove Box</button>
      <br></br>
    </div>
  );
}

export default Box;
