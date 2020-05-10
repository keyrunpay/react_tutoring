import React from "react";
import { fetchUser } from "../api/user";

export default function Leaderboard(props) {
  //   console.log(props.match.params.id);
  console.log(props);
  //   props.history.push("/");

  const [state, setState] = React.useState({
    loading: false,
    data: null,
    error: false,
  });

  // fetchComments().then(res=>{
  //     // do smth
  // }).catch(err=>{
  //     //handle error
  // });

  const getUsers = async () => {
    setState({ data: null, loading: true, error: false });
    try {
      const res = await fetchUser();
      const users = res.data.data;
      //   history.push("/dashbard");
      setState({ data: users, loading: false, error: false });
    } catch (err) {
      console.log(err);
      setState({ data: null, loading: false, error: err });
    }
  };

  React.useEffect(() => {
    getUsers();
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Leaderboard</h1>
      {state.loading && <p>Loading....</p>}
      {state.data && (
        <React.Fragment>
          {state.data.map((item) => {
            return <p key={item.id}>{item.email}</p>;
          })}
        </React.Fragment>
      )}

      {state.error && (
        <p style={{ color: "red" }}>{JSON.stringify(state.error)}</p>
      )}
      {/* condition ? true : false; */}
      {/* condition && true */}
    </div>
  );
}

// callback

// function xyz(resp) {
//   setTimeout(() => {
//     resp("success");
//   }, 1000);
// }

// xyz((response) => {
//   return res ;
// });
