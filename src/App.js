import React from "react";
import { debug } from "util";
import { hot } from "react-hot-loader";

const Warning = React.lazy(() => import("./Warning"));

class App extends React.Component {
  state = {
    count: 0
  };
  render() {
    const { count } = this.state;
    return (
      <div>
        <h2 className={count > 10 ? "warning" : null}>Numbers: {count}</h2>
        <h1>Hello World!</h1>
        <button
          onClick={() => this.setState(state => ({ count: state.count + 1 }))}
        >
          +
        </button>
        <button
          onClick={() => this.setState(state => ({ count: state.count - 1 }))}
        >
          -
        </button>
        {count > 10 ? (
          <React.Suspense fallback={null}>
            <Warning />
          </React.Suspense>
        ) : null}
      </div>
    );
  }
}

export default hot(module)(App);
