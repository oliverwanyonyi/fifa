import React, { useEffect, useReducer } from "react";

import { Link, useNavigate } from "react-router-dom";
import moment from "moment";
import { getMatches, getUsers, deleteMatch } from "../actions/userActions";
import Message from "../Components/Message";
import TableRow from "../Components/TableRow";
import { AppState } from "../Context/AppProvider";
import { getUsersReducer } from "../reducers/userReducers";

import Loader from "../Components/Loader";
import {
  getMatchesReducer,
  deleteMatchReducer,
} from "../reducers/matchReducers";
const Home = () => {
  const navigate = useNavigate();
  const { user: userInfo, setEditId } = AppState();
  const [state, dispatch] = useReducer(getUsersReducer);
  const [matchState, matchDispatch] = useReducer(getMatchesReducer);
  const [deleteState, deleteDispatch] = useReducer(deleteMatchReducer);
  const handleDelete = (matchId, opponentId, playerId) => {
    if (
      window.confirm(
        "Are you sure you want to delete this action can't be undone"
      )
    ) {
      deleteMatch(deleteDispatch, matchId, { opponentId, playerId }, userInfo);
    }
  };
  useEffect(() => {
    if (!userInfo?.token) {
      navigate("/login");
    } else {
      getUsers(dispatch);
      getMatches(matchDispatch);
    }
  }, [userInfo, navigate, deleteState?.success]);

  return (
    <div className="container home">
      {state?.error && <Message type="error">{state?.error}</Message>}
      {state?.loading ? (
        <Loader />
      ) : (
        <>
          <div className="home-landing">
            <h1 className="display1">
              Welcome back <span> {userInfo && userInfo.name}</span>
            </h1>
            <p className="text-muted">
              Here is how the table stands as per the past matches.
            </p>
          </div>
          <div className="competion-table">
            <table className="table">
              <thead>
                <tr>
                  <th>Rank</th>
                  <th>Gamer</th>
                  <th>Gp</th>
                  <th>Gd</th>
                  <th>W</th>
                  <th>L</th>
                  <th>D</th>
                  <th>Pts</th>
                </tr>
              </thead>

              <tbody>
                {state?.users?.map((user, idx) => (
                  <TableRow user={user} key={user._id} idx={idx} />
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}

      <div className="match-results-container">
        <h1 className="title">
          {matchState?.matches?.length > 0
            ? "Previous match results"
            : "No matches have been added yet."}
        </h1>
        {matchState?.loading ? (
          <Loader />
        ) : (
          <div className="match-results">
            {matchState?.matches?.map((match) => (
              <div className="match-result" key={match._id}>
                <div className="match-result-wrapper">
                  <div className="player">
                    <h4 className="name">
                      {state?.users?.find((u) => u._id === match.player).name}
                    </h4>
                  </div>
                  <div className="divider">
                    <span className="score">{match.playerGoals}</span>
                    <span className="divider-middle"> vs</span>
                    <span className="score">{match.opponentGoals}</span>
                  </div>
                  <div className="player">
                    <h4 className="name">
                      {state?.users?.find((u) => u._id === match.opponent).name}
                    </h4>
                  </div>
                </div>
                <div
                  className={
                    userInfo?.role === "admin"
                      ? "match-result-footer j-between"
                      : "match-result-footer j-center"
                  }
                >
                  <h3 className="time-tracker">
                    {moment(match.updatedAt).fromNow()}
                  </h3>
                  {userInfo?.role === "admin" && (
                    <div className="tools-icons">
                      <Link
                        to="/contest"
                        onClick={() => setEditId(match._id)}
                        className="tool-icon"
                      >
                        <span className="fas fa-edit"></span>
                      </Link>
                      <span
                        className="fas fa-trash tool-icon"
                        onClick={() =>
                          handleDelete(match._id, match.opponent, match.player)
                        }
                      ></span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
