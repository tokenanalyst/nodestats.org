import React from "react";

const mobileTooltips = (
  <ul className="mobile-list">
    <li>
      <span className="list-header">% of time in sync:</span> The % of time in
      the past hour that the node has downloaded and verified all the block data
      for what its peers are informing it is the current highest chain tip
    </li>
    <li>
      CPU Usage: The CPU usage for the node client process which is running on
      an Intel(R) Xeon(R) CPU E5-2686 @ 2.30GHz machine with two cores
    </li>
    <li>
      Memory Usage: The memory usage for the node client process on a dedicated
      machine with 15.25GiB of total memory available
    </li>
    <li>
      Upstream Bandwidth: The upstream network throughput on the network
      interface of the machine on which the node runs
    </li>
    <li>
      Downstream Bandwidth: The upstream network throughput on the network
      interface of the machine on which the node runs
    </li>
    <li>Peer count: The number of peers currently connected to the node</li>
    <li>
      Chain Data Size: The disk space taken up by the node client - including
      all of the chain
    </li>
    <li>
      % at conflicting tip: The proportion of time Geth and Parity have
      different block hashes at the same block height
    </li>
  </ul>
);

function closeParityFullModal() {
  const parityFullModal = document.getElementById("parityFullModal");
  parityFullModal.classList.toggle("is-active");
}
function closeGethFullModal() {
  const gethFullModal = document.getElementById("gethFullModal");
  gethFullModal.classList.toggle("is-active");
}
function closeParityFastModal() {
  const parityFastModal = document.getElementById("parityFastModal");
  parityFastModal.classList.toggle("is-active");
}
function closeGethFastModal() {
  const gethFastModal = document.getElementById("gethFastModal");
  gethFastModal.classList.toggle("is-active");
}
function closeParityArchiveModal() {
  const parityArchiveModal = document.getElementById("parityArchiveModal");
  parityArchiveModal.classList.toggle("is-active");
}

export function ParityFullModal() {
  return (
    <div className="modal" id="parityFullModal">
      <div className="modal-background" />
      <div className="modal-card">
        <header className="modal-card-head">
          <div className="modal-card-title">Parity Full Node</div>
        </header>
        <section className="modal-card-body">
          <div className="modal-inner-card">
            <h3>Version:</h3>
            <p>
              version Parity-Ethereum/v2.2.11-stable-8e31051-20190220/x86_64-linux-gnu/rustc1.32.0
            </p>
          </div>
          <p className="flags">
            /usr/bin/parity --ws-interface=0.0.0.0 --jsonrpc-interface=0.0.0.0
            -- base-path='/var/ethereum' --mode=active --ws-origins='*' --
            logging=info --db-path=/var/ethereum --tracing=off
            --cache-size=10024 --min-peers=512 --no-warp
            --log-file='/var/log/parity.log' 2>&1
          </p>
          {mobileTooltips}
        </section>
        <footer className="modal-card-foot">
          <button className="button">Close</button>
        </footer>
      </div>
    </div>
  );
}
export function GethFullModal() {
  return (
    <div className="modal" id="gethFullModal">
      <div className="modal-background" />
      <div className="modal-card">
        <header className="modal-card-head">
          <div className="modal-card-title">Geth Full Node</div>
        </header>
        <section className="modal-card-body">
          <div className="modal-inner-card">
            <h3>Version:</h3>
            <p>1.8.23-stable-c9427004</p>
          </div>
          <p className="flags">
            /usr/bin/geth --wsaddr 0.0.0.0 --rpcaddr 0.0.0.0 --datadir
            /var/ethereum --wsorigins='*' --metrics --verbosity 3 --rpc --ws --
            syncmode 'full' > /var/log/geth.log 2>&1
          </p>
          {mobileTooltips}
        </section>
        <footer className="modal-card-foot">
          <button className="button">Close</button>
        </footer>
      </div>
    </div>
  );
}
export function ParityFastModal() {
  return (
    <div className="modal" id="parityFastModal">
      <div className="modal-background" />
      <div className="modal-card">
        <header className="modal-card-head">
          <div className="modal-card-title">Parity Fast Node</div>
        </header>
        <section className="modal-card-body">
          <div className="modal-inner-card">
            <h3>Version:</h3>
            <p>
              version
              Parity-Ethereum/v2.2.11-stable-8e31051-20190220/x86_64-linux-gnu/rustc1.32.0
            </p>
          </div>
          <p className="flags">
            /usr/bin/parity --ws-interface=0.0.0.0 --jsonrpc-interface=0.0.0.0
            -- pruning=fast --base-path='/var/ethereum' --mode=active --ws-
            origins='*' --logging=info --db-path=/var/ethereum --tracing=off --
            cache-size=10024 --min-peers=512 --log-file='/var/log/parity.log'
          </p>
          {mobileTooltips}
        </section>
        <footer className="modal-card-foot">
          <button className="button">Close</button>
        </footer>
      </div>
    </div>
  );
}
export function GethFastModal() {
  return (
    <div className="modal" id="gethFastModal">
      <div className="modal-background" />
      <div className="modal-card">
        <header className="modal-card-head">
          <div className="modal-card-title">Geth Fast Node</div>
        </header>
        <section className="modal-card-body">
          <div className="modal-inner-card">
            <h3>Version:</h3>
            <p>1.8.23-stable-c9427004</p>
          </div>
          <p className="flags">
            /usr/bin/geth --wsaddr 0.0.0.0 --rpcaddr 0.0.0.0 --datadir
            /var/ethereum --wsorigins='*' --metrics --verbosity 3 --rpc --ws --
            syncmode 'fast' > /var/log/geth.log 2>&1
          </p>
          {mobileTooltips}
        </section>
        <footer className="modal-card-foot">
          <button className="button">Close</button>
        </footer>
      </div>
    </div>
  );
}
export function ParityArchiveModal() {
  return (
    <div className="modal" id="parityArchiveModal">
      <div className="modal-background" />
      <div className="modal-card">
        <header className="modal-card-head">
          <div className="modal-card-title">Parity Archive Node</div>
        </header>
        <section className="modal-card-body">
          <div className="modal-inner-card">
            <h3>Version:</h3>
            <p>
              version
              Parity-Ethereum/v2.3.4-beta-0e95db1-20190220/x86_64-linux-gnu/rustc1.32.0
            </p>
          </div>
          <p className="flags">
            /usr/bin/parity --cache-size=100000 --db-compaction=ssd --ws-
            interface=0.0.0.0 --jsonrpc-interface=0.0.0.0 --pruning=archive --
          </p>
          <ul className="mobile-list">
            <li>
              % of time in sync: The % of time in the past hour that the node
              has downloaded and verified all the block data for what its peers
              are informing it is the current highest chain tip
            </li>
            <li>
              CPU Usage: The CPU usage for the node client process which is
              running on an Intel(R) Xeon(R) CPU E5-2686 v4 @ 2.30GHz machine
              with 16 cores
            </li>
            <li>
              Memory Usage: The memory (RAM) usage of the node client process
              on a dedicated machine with 122GiB of total memory available
            </li>
            <li>
              Upstream Bandwidth: The upstream network throughput on the network
              interface of the machine on which the node runs
            </li>
            <li>
              Downstream Bandwidth: The upstream network throughput on the network
              interface of the machine on which the node runs
            </li>
            <li>Peer count: The number of peers currently connected to the node</li>
            <li>
              Chain Data Size: The disk space taken up by the node client - including
              all of the chain
            </li>
            <li>
              % at conflicting tip: The proportion of time Geth and Parity have
              different block hashes at the same block height
            </li>
          </ul>
        </section>
        <footer className="modal-card-foot">
          <button className="button">Close</button>
        </footer>
      </div>
    </div>
  );
}
