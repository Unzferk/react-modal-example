import React from 'react'
import '../styles/style.css';


const Modal = ({ isOpen, closeModal, children }) => {

  return (
    <div className={`modalcss ${isOpen && 'modalcss-open'}`} >

      <div className="modal__dialog">
        {children}
      </div>

    </div>
  )
}

export default Modal