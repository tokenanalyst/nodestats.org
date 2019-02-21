import React from 'react';
// import axios from 'axios'; for later
import ParityRow from './ParityRow';
import GethRow from './GethRow';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {

    return (
      <div className="columns">
        <div className="columns column is-8 is-offset-2">
          <div className="column is-6">
            <ParityRow />
            <ParityRow />
            <ParityRow />
            <ParityRow />
            <ParityRow />
            <ParityRow />
            <ParityRow />
          </div>
          <div className="column is-6">
            <GethRow />
            <GethRow />
            <GethRow />
            <GethRow />
            <GethRow />
            <GethRow />
            <GethRow />
          </div>
        </div>
      </div>
    )
  }
}
export default Main;
