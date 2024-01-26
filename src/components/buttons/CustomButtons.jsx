import'./buttons.css'
import React, { useState } from 'react';
import Modal from '../modals/Modal';

export const PrimaryButton = ({ children }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState('');
  
    const openModal = (content) => {
      setModalContent(content);
      setModalOpen(true);
    };
  
    const closeModal = () => {
      setModalOpen(false);
    };
  
    return (
      <div>
        <button className='primary' onClick={() => openModal('¡Crédito solicitado con éxito!')}>{children}</button>
        {modalOpen && <Modal closeModal={closeModal} content={modalContent} />}
      </div>
    );
  };
  
  export const SecondaryButton = ({ children, totalAmount, term }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState('');
  
    const openModal = (content) => {
      setModalContent(content);
      setModalOpen(true);
    };
  
    const closeModal = () => {
      setModalOpen(false);
    };
  
    return (
      <div>
        <button className='secondary' onClick={() => openModal(`El monto total es $${totalAmount} y el plazo es de ${term} meses.`)}>{children}</button>
        {modalOpen && <Modal closeModal={closeModal} content={modalContent} />}
      </div>
    );
  };
 