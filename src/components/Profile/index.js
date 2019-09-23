import React from 'react';
import ProfileHook from "./profileHookExample";

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true ,
    };
  }

  componentDidMount () {
    console.log("componentDidMount har körts. Sidan har mountats")
  }

  componentWillUnmount() {
console.log("ComponentWillUnmount") 
  }

  render() {
    return <h1>Hej jag gillar katter</h1>;
    
   
  }
}

export default ProfilePage;
