import axios from "axios";
import React, { useEffect, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import { updateStats } from "../actions/userActions";
import { api } from "../api/api";
import Message from "../Components/Message";
import { AppState } from "../Context/AppProvider";

import "../css/auth.css";
import { updateStatsReducer } from "../reducers/userReducers";

const Contest = () => {
  const navigate = useNavigate();

  const { users, setUsers, user } = AppState();
  const [loadError, setLoadError] = useState(null);
  const [contest, setContest] = useState({
    player: "",
    opponent: "",
    winner: "",
  });
  const [matchOutcome, setMatchOutcome] = useState(true);
  const [participants, setPartcipants] = useState([]);
  const initialState = {
    loading: false,
    users: [],
    error: null,
  };
  const [state, dispatch] = useReducer(updateStatsReducer, initialState);
  const changeHandler = (e) => {
    setContest({ ...contest, [e.target.name]: e.target.value });

    const exists = participants.find((p) => p === e.target.value);
    if (participants.length <= 1) {
      setPartcipants([...participants, exists ? exists : e.target.value]);
    }
  };
  const submitHandler = (e) => {
    e.preventDefault();
    updateStats(dispatch, contest, user);
    setContest({
      player: "",
      opponent: "",
      winner: "",
    });
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
  }, []);

  useEffect(() => {
    if (user?.role !== "admin") {
      navigate("/");
    }
  }, [user?.role]);

  return (
    <div className="auth">
      <div className="container">
        <div className="auth-wrapper">
          <form className="auth-form">
            <div className="form-header">
              <p className="text-muted">Update final match outcomes</p>
              <div className="form-group">
                <div className="input-group">
                  <input
                    type="checkbox"
                    onChange={(e) => setMatchOutcome(e.target.checked)}
                    name="outcome"
                    checked={matchOutcome}
                    id="outcome"
                  />
                  <label htmlFor="outcome">
                    {matchOutcome
                      ? "This match went two way win/lose uncheck for draw"
                      : "This match ended in a draw uncheck for 2 way"}
                  </label>
                </div>
              </div>
            </div>
            {matchOutcome ? (
              <>
                <div className="form-group">
                  <select
                    className="form-select"
                    name="player"
                    onSelect={() => alert("hello world")}
                    value={contest.player}
                    onChange={(e) => changeHandler(e)}
                  >
                    <option value=""></option>
                    {users &&
                      users
                        .filter((u) => u._id !== contest.opponent)
                        .map((user) => (
                          <option value={user._id} key={user._id}>
                            {user.name}
                          </option>
                        ))}
                  </select>
                  <label className="form-label">Player</label>
                </div>
                <div className="form-group">
                  <select
                    className="form-select"
                    name="opponent"
                    value={contest.opponent}
                    onChange={(e) => changeHandler(e)}
                  >
                    <option value=""></option>

                    {users &&
                      users
                        .filter((u) => u._id !== contest.player)
                        .map((user) => (
                          <option value={user._id} key={user._id}>
                            {user.name}
                          </option>
                        ))}
                  </select>
                  <label className="form-label">Opponent</label>
                </div>

                <div className="form-group">
                  <select
                    className="form-select"
                    name="winner"
                    value={contest.winner}
                    onChange={(e) => changeHandler(e)}
                  >
                    <option value=""></option>

                    {participants.map((user) => (
                      <option value={user} key={user}>
                        {users && users.find((u) => u._id === user).name}
                      </option>
                    ))}
                  </select>
                  <label className="form-label">Winner</label>
                </div>
              </>
            ) : (
              <>
                <div className="form-group">
                  <select
                    className="form-select"
                    name="player"
                    value={contest.player}
                    onChange={(e) => changeHandler(e)}
                  >
                    <option value=""></option>
                    {users &&
                      users.map((user) => (
                        <option value={user._id} key={user._id}>
                          {user.name}
                        </option>
                      ))}
                  </select>
                  <label className="form-label">Player</label>
                </div>
                <div className="form-group">
                  <select
                    className="form-select"
                    name="opponent"
                    value={contest.opponent}
                    onChange={(e) => changeHandler(e)}
                  >
                    <option value=""></option>
                    {users &&
                      users.map((user) => (
                        <option value={user._id} key={user._id}>
                          {user.name}
                        </option>
                      ))}
                  </select>
                  <label className="form-label">Opponent</label>
                </div>
              </>
            )}

            <div className="form-footer">
              {!matchOutcome && (
                <p className="info">
                  Pick player and opponent and submit if the outcome was a draw
                </p>
              )}
              <button
                className="form-submit"
                onClick={submitHandler}
                disabled={state?.loading}
              >
                {state?.loading ? "Saving please wait" : "Save"}
              </button>
            </div>
          </form>
          {state?.success && (
            <Message type="success">Details Updated successfully</Message>
          )}
          {state?.error && <Message type="error">{state?.error}</Message>}
          {loadError && <Message type="error">{loadError}</Message>}
        </div>
      </div>
    </div>
  );
};

export default Contest;
