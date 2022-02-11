import * as React from "react";
import "./global.css";

export default function GithubLogin(props) {
  /*
   *Here we are implementing Github O-Auth Signin Feature
   */
  return (
    <>
      <a
        href={`https://github.com/login/oauth/authorize?scope=user:email&client_id=${process.env.GATSBY_CLIENT_ID}`}
      >
        Login With Github!
      </a>
    </>
  );
}
