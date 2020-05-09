import React from "react";

function Xyz() {
  const [state, setState] = React.useState({ count: 0 });

  React.useEffect(() => {
    // coumponentDidMount
    return () => {
      //componentWillUnmount
    };
  }, [true]);

  React.useEffect(() => {
    // coumponentDidUpdate
  });

  // useEffect(a, b)
  // a* = function(){} , ()=>{}
  // b = dependencies array [a,b,x,s]

  return <div className="App">world</div>;
}

class App extends React.Component {
  state = {
    count: 0,
    time: 3,
  };

  componentDidMount() {
    console.log("");
    // apiFetch
    this.setState({ count: 1 });
  }

  componentDidUpdate() {
    //task to be done when update
  }

  componentWillUnmount() {}

  // *
  render() {
    return <div>{this.state.count}</div>;
  }
}

export default App;
