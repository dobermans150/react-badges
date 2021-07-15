import React from 'react';

import Modal from './Modal';

import './styles/DeleteBadgeModal.css';

export default function DeleteBatchModal(props) {
  return (
    <Modal isOpen={props.modalIsOpen} onClose={props.onCloseModal}>
      <div className="DeleteBadgeModal">
        <h1>Are You Sure?</h1>
        <p>You are about to delete this badge.</p>
        <div>
          <button onClick={props.onDeleteBadge} className="btn btn-danger mr-4">
            Delete
          </button>
          <button onClick={props.onCloseModal} className="btn btn-primary ml-4">
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
}
