import React from 'react';
import "./modal.css"

const Modal = ({ closeModal, title, content }) => {
    return (
        <div className="modal">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    );
};



export default Modal;