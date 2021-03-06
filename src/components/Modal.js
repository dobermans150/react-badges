import React from 'react';
import ReactDom from 'react-dom';
import './styles/Modal.css';

export default function Modal(props) {
  if (!props.isOpen) {
    return null;
  }

  return (
    <div>
      {ReactDom.createPortal(
        <div className="Modal">
          <div className="Modal__container">
            <button onClick={props.onClose} className="Modal__close-button">
              X
            </button>

            {props.children}
          </div>
        </div>,
        document.getElementById('modal')
      )}
    </div>
  );
}
