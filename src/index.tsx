import React from "react";
import ReactDOM from "react-dom";
import Table from "../src/table/table";
import "./style.css";

interface AppProps {
  greeting: string
}

class App extends React.Component<AppProps> {
  constructor(props: AppProps) {
    super(props);
  }

  render() {
    return (
      <div>
        <Table />
      </div>
    )
  }
}

ReactDOM.render(
  <App greeting="Hello!!" />,
  document.querySelector('.app'),
);