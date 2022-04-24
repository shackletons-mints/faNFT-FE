import React from 'react'
import Modal from "react-bootstrap/Modal"
import ModalBody from "react-bootstrap/ModalBody"
import ModalHeader from "react-bootstrap/ModalHeader"
import ModalFooter from "react-bootstrap/ModalFooter"
import ModalTitle from "react-bootstrap/ModalTitle"

import './PreparationModal.css'

const PreparationModal = ({ hideModal, isOpen }) => {

    return (

        <Modal dialogClassName="enter-lottery-modal" show={isOpen} onHide={hideModal}>
            <ModalHeader className='modal-header'>
                <h1>Important!</h1>
            </ModalHeader>
            <ModalBody className='modal-body'>
                <div>You will be signing two transactions with your metamask</div>
                <ol>
                    <li>A usage fee paid to Double Dragon Crypto Devs</li>
                    <li>A deposit of your entry fee into the lottery Pot</li>
                </ol>
                <div className='danger'>
                    Don't reload your browser in between transactions! <br></br>
                    This may result in loss of ether or your credentials<br></br>
                    not being added to the lottery state
                
                </div>
            </ModalBody>
            
            <ModalFooter className="modal-footer">
                <button className='enter-lottery'>
                    Enter Lottery
                </button>
            </ModalFooter>
        </Modal>
    )
}

export default PreparationModal