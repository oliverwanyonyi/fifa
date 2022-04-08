import React, { useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { getUsers } from "../actions/userActions";
import Message from "../Components/Message";
import TableRow from "../Components/TableRow";
import { AppState } from "../Context/AppProvider";
import { getUsersReducer } from "../reducers/userReducers";
import Loader from "../Components/Loader";
const Home = () => {
  const navigate = useNavigate();
  const { user: userInfo } = AppState();
  const [state, dispatch] = useReducer(getUsersReducer);

  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    } else {
      getUsers(dispatch);
    }
  }, [userInfo, navigate]);

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
                  <th>Player</th>
                  <th>GP</th>
                  <th>Won</th>
                  <th>Lost</th>
                  <th>Draw</th>
                  <th>Points</th>
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
    </div>
  );
};

export default Home;
