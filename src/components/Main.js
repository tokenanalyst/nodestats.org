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
      <section>
        <div className="columns">
          <div className="columns column is-8 is-offset-2 is-mobile main-box">
            <div className="column is-6">
              <div className="content has-text-centered">
                <h2>Parity</h2>
              </div>
              <div className="content has-text-centered node-type">
                <p>Full Node (1 hr avg)</p>
              </div>
              <ParityRow />
              <ParityRow />
              <ParityRow />
              <ParityRow />
              <ParityRow />
              <ParityRow />
              <ParityRow />
            </div>
            <div className="column is-6">
              <div className="content has-text-centered">
                <h2>Geth</h2>
              </div>
              <div className="content has-text-centered node-type not-used">
                <p className="">Full Node (1 hr avg)</p>
              </div>
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
        <br />
        <div className="columns">
          <div className="columns column is-8 is-offset-2 is-mobile">
            <div className="column is-6">
              <div className="content has-text-centered node-type">
                <p>Fast Node (1 hr avg)</p>
              </div>
              <ParityRow />
              <ParityRow />
              <ParityRow />
              <ParityRow />
              <ParityRow />
              <ParityRow />
              <ParityRow />
            </div>
            <div className="column is-6">
              <div className="content has-text-centered node-type not-used">
                <p className="white">Full Node (1 hr avg)</p>
              </div>
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
      </section>
    )
  }
}
export default Main;
