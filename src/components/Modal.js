import React from 'react';

function closeModal() {
  const modal = document.getElementById('modal');
  modal.classList.toggle('is-active');
}

function Modal() {
  return (
    <div className="modal" id="modal">
      <div className="modal-background"></div>
      <div className="modal-content">
        <p>Hello</p>
      </div>
      <button className="modal-close is-large" aria-label="close" id="closeModal" onClick={closeModal}></button>
    </div>
  );
}

export default Modal;
