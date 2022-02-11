import * as React from "react";
import { Link } from "gatsby";

import "./afterlogin.css";

export default function GithubLogin() {
  /*
   *Here with the help of access_token we will fetch the user activity
   */
  const username = window.history.state.username;
  const token = window.history.state.token;
  const [isLoaded, setisLoaded] = React.useState(false);
  const [data, setdata] = React.useState([]);

  React.useEffect(() => {
    setisLoaded(false);
    fetch(`https://api.github.com/users/${username}/events`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((getdata) => {
        setisLoaded(true);
        setdata(getdata);
      });
  }, []);

  /*
   *Here we will map the data fetched by the API previously
   */
  const dataMapper = (data) => {
    console.log(data);
    let content = [];
    for (let i = 0; i < data.length; i++) {
      content.push(
        <div className="card">
          <h4>{data[i].actor.login}</h4>
          <h4>{data[i].type}</h4>
          <h4>{data[i].created_at}</h4>
          <h4>{data[i].repo.name}</h4>
        </div>
      );
    }
    return content;
  };

  return (
    <>
      {isLoaded == false ? (
        <h2>Loding Events for {username}!!</h2>
      ) : (
        <div className="main">{dataMapper(data)}</div>
      )}
      <Link to="/login">Logout!!</Link>
    </>
  );
}
