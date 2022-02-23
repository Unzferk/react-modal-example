import { useState } from "react";
import Modal from "./components/Modal";
import ModalBootstrap from "./components/ModalBootstrap";
import useModal from "./hooks/useModal";

function App() {

  const [modalIsOpen, openCloseModal] = useModal();

  return (
    /*<div className="App">
      <h1>APP MODAL</h1>

      <button onClick={openCloseModal} className='btn btn-primary'>Open</button>

      <Modal isOpen={modalIsOpen} closeModal={openCloseModal}> 
        <h1>Modal</h1>
        <h1>Modal</h1>
        <h1>Modal</h1>
        <button className='btn btn-primary' onClick={openCloseModal} >Close</button>
      </Modal>
      
    </div>*/

    <div className="App">
      <div className="container">
        <button className="btn btn-primary mt-3 " onClick={openCloseModal}>Open</button>
        {modalIsOpen && <ModalBootstrap openClose={openCloseModal}/>}
        
      </div>


    </div>
  );
}

export default App;
