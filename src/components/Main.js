import React from 'react';
import axios from 'axios';
import ParityRow from './ParityRow';
import GethRow from './GethRow';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    axios.get('https://api.tfl.gov.uk/Line/Mode/tube/Status')
      .then(result => this.setState({ stats: result.data }));
  }

  render() {
    const stats = this.state.stats;
    console.log('stats is', stats, this.props.match.params)
    return (
      <section>
        <div className="columns">
          <div className="page-divide"></div>
          <div className="columns column is-8 is-offset-2 is-mobile is-tablet main-box">
            <div className="column is-6">
              <div className="content has-text-centered company-name">
                <h2 className="" id="bar" >Parity</h2>
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
            <div className="column is-6 geth">
              <div className="content has-text-centered company-name">
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
        <div className="columns">
          <div className="columns column is-8 is-offset-2 is-mobile">
            <div className="column is-6">
              <div className="content has-text-centered node-type">
                <p>Archive Node (1 hr avg)</p>
              </div>
              <ParityRow />
              <ParityRow />
              <ParityRow />
              <ParityRow />
              <ParityRow />
              <ParityRow />
              <ParityRow />
            </div>
          </div>
        </div>
        <footer className="footer">
          <div className="content has-text-centered">
            <p>
            Created by TokenAnalyst
            </p>
          </div>
        </footer>
      </section>
    )
  }
}
export default Main;
