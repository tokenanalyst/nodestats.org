import React from 'react';

function closeModal() {
  const modal = document.getElementById('modal');
  modal.classList.toggle('is-active');
}

function Modal() {
  return (
    <div className="modal" id="modal">
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Modal title</p>
          <button className="delete" aria-label="close" onClick={closeModal}></button>
        </header>
        <section className="modal-card-body">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </section>
        <footer className="modal-card-foot">

        </footer>
      </div>
      <button className="modal-close is-large" aria-label="close" id="closeModal" onClick={closeModal}></button>
    </div>
  );
}

export default Modal;
