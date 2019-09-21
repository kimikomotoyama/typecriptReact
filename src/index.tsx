import React from "react";
import ReactDOM from "react-dom";

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
        {this.props.greeting}
      </div>
    )
  }
}

ReactDOM.render(
  <App greeting="Hello!!" />,
  document.querySelector('.app'),
);