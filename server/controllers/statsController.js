import mongoose from "mongoose";
import asyncHandler from "express-async-handler";
import User from "../models/User.js";
import { getUserStats } from "../utils/getStats.js";

const getStats = asyncHandler(async (req, res) => {
  const users = await User.find({})
    .select("-password")
    .sort({ totalPoints: -1 });

  if (users) {
    res.status(200).json(users);
  }
});

const updateStats = asyncHandler(async (req, res) => {
  const { player, opponent, winner } = req.body;

  if (winner) {
    if (winner.toString() === player.toString()) {
      const playerWinner = await User.findById(player);
      playerWinner.stat.push("win");
      const { lost, won, drawn, totalPoints } = getUserStats(playerWinner.stat);

      await User.findByIdAndUpdate(
        player,
        { lost, won, drawn, totalPoints },
        { new: true }
      );
      await playerWinner.save();
      const opponentLoser = await User.findById(opponent);
      opponentLoser.stat.push("lose");
      const {
        lost: oLost,
        won: oWon,
        drawn: oDrawn,
        totalPoints: oTotalPoints,
      } = getUserStats(opponentLoser.stat);
      await User.findByIdAndUpdate(
        opponent,
        {
          lost: oLost,
          won: oWon,
          drawn: oDrawn,
          totalPoints: oTotalPoints,
        },
        { new: true }
      );
      await opponentLoser.save();
    } else if (winner.toString() === opponent.toString()) {
      const opponentWinner = await User.findById(opponent);
      opponentWinner.stat.push("win");
      const {
        lost: oLost,
        won: oWon,
        drawn: oDrawn,
        totalPoints: oTotalPoints,
      } = getUserStats(opponentWinner.stat);
      await User.findByIdAndUpdate(
        opponent,
        {
          lost: oLost,
          won: oWon,
          drawn: oDrawn,
          totalPoints: oTotalPoints,
        },
        { new: true }
      );
      await opponentWinner.save();
      const playerLoser = await User.findById(player);
      playerLoser.stat.push("lose");
      const { lost, won, drawn, totalPoints } = getUserStats(playerLoser.stat);
      await User.findByIdAndUpdate(
        player,
        { lost, won, drawn, totalPoints },
        { new: true }
      );
      await playerLoser.save();
    }
  } else {
    const playerDraw = await User.findById(player);
    playerDraw.stat.push("draw");
    const { lost, won, drawn, totalPoints } = getUserStats(playerDraw.stat);
    await User.findByIdAndUpdate(
      player,
      { lost, won, drawn, totalPoints },
      { new: true }
    );
    await playerDraw.save();
    const opponentDraw = await User.findById(opponent);
    opponentDraw.stat.push("draw");
    const {
      lost: oLost,
      won: oWon,
      drawn: oDrawn,
      totalPoints: oTotalPoints,
    } = getUserStats(opponentDraw.stat);
    await User.findByIdAndUpdate(
      opponent,
      {
        lost: oLost,
        won: oWon,
        drawn: oDrawn,
        totalPoints: oTotalPoints,
      },
      { new: true }
    );
    await opponentDraw.save();
  }
  res.json({
    message: "update successful",
  });
});
export { getStats, updateStats };
