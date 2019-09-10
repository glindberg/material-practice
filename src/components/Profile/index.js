import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };
  }

  render() {
    return <h1>Hej jag gillar katter</h1>;
  }
}

export default App;
