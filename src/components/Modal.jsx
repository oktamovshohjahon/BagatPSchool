import React from "react";

function Modal({ title, des }) {
  return (
    <div>
      <div className="modal" tabindex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{title}</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>{des}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
