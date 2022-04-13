import axios from "axios";
import React, { useEffect, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createMatch, getMatches, updateMatch } from "../actions/userActions";
import { api } from "../api/api";
import Message from "../Components/Message";
import { AppState } from "../Context/AppProvider";

import "../css/auth.css";
import {
  createMatchReducer,
  getMatchesReducer,
  updateMatchReducer,
} from "../reducers/matchReducers";

const Contest = () => {
  const navigate = useNavigate();

  const { users, setUsers, user, editId, setEditId } = AppState();
  const [loadError, setLoadError] = useState(null);
  const initialState = {
    loading: false,
    users: [],
    error: null,
  };
  const [matchState, matchDispatch] = useReducer(getMatchesReducer);
  const [state, dispatch] = useReducer(createMatchReducer);
  const [updateState, dispatchUpdate] = useReducer(updateMatchReducer);

  const matchDetails = editId
    ? matchState?.matches?.find((m) => m._id === editId)
    : null;
  const [player, setPlayer] = useState({
    id: "",
    goals: 0,
  });
  const [opponent, setOpponent] = useState({
    id: "",
    goals: 0,
  });

  const changeHandler = (e) => {
    if (e.target.type === "number") {
      if (isNaN(e.target.value) || e.target.value < 0) {
        e.target.value = 0;
      }
      if (e.target.name === "playerGoals") {
        setPlayer({ ...player, goals: e.target.value });
      } else {
        setOpponent({ ...opponent, goals: e.target.value });
      }
    }
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (editId) {
      updateMatch(dispatchUpdate, { player, opponent }, user, matchDetails._id);
      setEditId(null);
      setOpponent({ id: "", goals: 0 });
      setPlayer({ id: "", goals: 0 });
    } else {
      createMatch(dispatch, { player, opponent }, user);
      setOpponent({ id: "", goals: 0 });
      setPlayer({ id: "", goals: 0 });
    }
  };
  useEffect(() => {
    const getPartcipants = async () => {
      try {
        const { data } = await axios.get(`${api}/users/`);
        setUsers(data);
      } catch (error) {
        setLoadError("No internet Connection!");
      }
    };
    getPartcipants();
    getMatches(matchDispatch);
  }, []);

  useEffect(() => {
    if (matchDetails) {
      setOpponent({
        ...opponent,
        id: matchDetails.opponent,
        goals: matchDetails.opponentGoals,
      });
      setPlayer({
        ...player,
        id: matchDetails.player,
        goals: matchDetails.playerGoals,
      });
    }
  }, [matchDetails]);

  useEffect(() => {
    if (user?.role !== "admin") {
      navigate("/");
    }
  }, [user?.role, navigate]);
  console.log(state);
  return (
    <div className="auth">
      <div className="container">
        <div className="auth-wrapper">
          <form className="auth-form">
            <div className="form-header">
              <p className="text-muted">
                {editId
                  ? `Editng match #${matchDetails && matchDetails._id}`
                  : "Record Match Outcome"}
              </p>
            </div>

            <div className="form-group">
              <select
                className="form-select"
                name="player"
                value={player.id}
                onSelect={() => alert("hello world")}
                onChange={(e) => setPlayer({ ...player, id: e.target.value })}
              >
                <option value=""></option>
                {users &&
                  users
                    .filter((u) => u._id !== opponent.id)
                    .map((user) => (
                      <option value={user._id} key={user._id}>
                        {user.name}
                      </option>
                    ))}
              </select>
              <label className="form-label">Player</label>
            </div>
            <div className="form-group">
              <input
                type="number"
                className="form-control"
                name="playerGoals"
                id="playerGoals"
                value={player.goals}
                onChange={(e) => changeHandler(e)}
              />
              <label htmlFor="playerGoals" className="form-label">
                Player Goals
              </label>
            </div>
            <div className="form-group">
              <select
                className="form-select"
                name="opponent"
                value={opponent.id}
                onChange={(e) =>
                  setOpponent({ ...opponent, id: e.target.value })
                }
              >
                <option value=""></option>

                {users &&
                  users
                    .filter((u) => u._id !== player.id)
                    .map((user) => (
                      <option value={user._id} key={user._id}>
                        {user.name}
                      </option>
                    ))}
              </select>
              <label className="form-label">Opponent</label>
            </div>

            <div className="form-group">
              <input
                type="number"
                className="form-control"
                name="opponentGoals"
                id="opponentGoals"
                value={opponent.goals}
                onChange={(e) => changeHandler(e)}
              />
              <label htmlFor="opponentGoals" className="form-label">
                Opponent Goals
              </label>
            </div>

            <div className="form-footer">
              <button
                className="form-submit"
                onClick={submitHandler}
                disabled={state?.loading}
              >
                {state?.loading || updateState?.loading
                  ? "Saving please wait"
                  : "Save"}
              </button>
            </div>
          </form>
          {state?.success && (
            <Message type="success">Details Updated successfully</Message>
          )}
          {updateState?.success && (
            <Message type="success">Details Updated successfully</Message>
          )}
          {state?.error && <Message type="error">{state?.error}</Message>}
          {updateState?.error && (
            <Message type="error">{updateState?.error}</Message>
          )}

          {loadError && <Message type="error">{loadError}</Message>}
        </div>
      </div>
    </div>
  );
};

export default Contest;
