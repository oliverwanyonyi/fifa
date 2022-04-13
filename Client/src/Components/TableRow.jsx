import React from "react";
import { AppState } from "../Context/AppProvider";

const TableRow = ({ user, idx }) => {
  const { user: userInfo } = AppState();
  return (
    <tr className={user._id === userInfo.id ? "active" : ""}>
      <td>{idx + 1}</td>
      <td>{user.name}</td>
      <td>{user.stats.length}</td>
      <td>{user.totalGoals}</td>
      <td>{user.won}</td>
      <td>{user.lost}</td>
      <td>{user.drawn}</td>
      <td>{user.totalPoints}</td>
    </tr>
  );
};

export default TableRow;
