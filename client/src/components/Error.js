import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <>
      <div id="notfound">
        <div className="notfound">
          <div className="notfound-404">
            <h1>404</h1>
          </div>
          <h2>we are sorry, page not found!</h2>
          <Link to="/">Back To Home Page!</Link>
        </div>
      </div>
    </>
  );
}
