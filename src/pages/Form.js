import React from "react";
import Axios from "axios";

export default function Form() {
  const userRef = React.useRef(null);
  const passRef = React.useRef(null);

  const log = () => {
    const payload = {
      username: userRef.current.value,
      password: passRef.current.value,
    };

    console.log(payload);

    // Axios.post("url", payload).then(res=>vj).catch(err=>n);
  };

  console.log("Changed");

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          log();
        }}
      >
        <input type="text" ref={userRef} placeholder="Username" />
        <input
          type="text"
          placeholder="Password"
          ref={passRef}
          // onChange={(event) => {
          //   setState({ ...state, password: event.target.value });
          // }}
        />

        <button onClick={log}>Submit</button>
      </form>
    </div>
  );
}
