import { useState } from 'react'

const useModal = (initialValue = false) => {

    const [modalIsOpen, setModalIsOpen] = useState(initialValue);

    const openCloseModal = () => {
        setModalIsOpen(!modalIsOpen);
    }

    return [modalIsOpen,openCloseModal]
}

export default useModal