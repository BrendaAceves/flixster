import React from "react";
import "./Modal.css";

const Modal = ({show, onClose, children }) => {
    // Don't show modal if the user hasn't clicked on the movie
    if (!show) {
        return null;
    }

    return (
    <div className="modal" onClick={onClose}>
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
        <button onClick={onClose}>Close</button>
        </div>
        <div className="modal-body">{children}</div>
    </div>
    </div>
    );
};

export default Modal;