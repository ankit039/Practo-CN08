import * as React from "react";
import { navigate } from "gatsby";

export const GithubCallback = ({ serverData }) => {
  /*
   *Fetch username from token then passing it to further routes
   */
  const tokenin = serverData.access_token.split("&")[0];
  const token = tokenin.split("=")[1];
  const [isLoaded, setisLoaded] = React.useState(false);
  const [data, setdata] = React.useState([]);

  React.useEffect(() => {
    setisLoaded(false);
    fetch(`https://api.github.com/user`, {
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
        setdata(getdata.login);
        navigate("/afterlogin", {
          state: { sucess: true, username: getdata.login, token: token },
        });
      });
  }, []);

  return (
    <>
      <h2>Loading..</h2>
    </>
  );
};

export default GithubCallback;

export async function getServerData(context) {
  const token = context.query.code;

  const res = await fetch(
    `https://github.com/login/oauth/access_token?client_id=${process.env.GATSBY_CLIENT_ID}&client_secret=${process.env.GATSBY_CLIENT_SECRET}&code=${token}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const access_token = await res.text();

  return {
    status: 200,
    headers: {},
    props: { access_token },
  };
}
