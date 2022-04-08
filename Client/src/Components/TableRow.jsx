import React from "react";

const TableRow = ({ user, idx }) => {
  return (
    <tr>
      <td>{idx + 1}</td>
      <td>{user.name}</td>
      <td>{user.stat.length}</td>
      <td>{user.won}</td>
      <td>{user.lost}</td>
      <td>{user.drawn}</td>
      <td>{user.totalPoints}</td>
    </tr>
  );
};

export default TableRow;
