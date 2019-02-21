import React from 'react';

function ParityRow() {
  return (
    <section className="columns is-mobile">
      <p className="column is-3-desktop graph">graph</p>
      <p className="column is-8-mobile is-6-desktop text">Text</p>
      <p className="column is-4-mobile is-3-desktop data">Data</p>
    </section>
  );
}

export default ParityRow;
