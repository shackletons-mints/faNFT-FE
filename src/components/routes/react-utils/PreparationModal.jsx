import React from 'react'
import Modal from "react-bootstrap/Modal"
import ModalBody from "react-bootstrap/ModalBody"
import ModalHeader from "react-bootstrap/ModalHeader"
import ModalFooter from "react-bootstrap/ModalFooter"
import ModalTitle from "react-bootstrap/ModalTitle"

import check from '../../../assets/check.svg'

import './PreparationModal.css'

const PreparationModal = ({ hideModal, isOpen }) => {

//     <div className='filled-circle' id="circle-one">
//     <img className='check-mark' src={check} />
// </div>
// <div className='filled-line' id="line-one"></div>
// <div id="circle-two"></div>
// <div id="line-two"></div>
// <div id="circle-three"></div>

    const handleClick = () => {
        const circles = document.querySelectorAll('.circle')
        const lines = document.querySelectorAll('.line')

        circles[0].classList.add('filled-circle')
        circles[0].classList.remove('circle')
        lines[0].classList.add('filled-line')
        lines[0].classList.remove('line')
    }

    return (

        <>
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
                    <button className='enter-lottery' >
                        Enter Lottery
                    </button>
                </ModalFooter>
                <div>
                    {/* <ModalBody className='transaction-modal'>
                        <div className='progress-bar'>
                            <div className='circle' >
                                <img className='check-mark' src={check} />
                            </div>
                            <div className='line'></div>
                            <div className='circle'>
                                <img className='check-mark' src={check} />
                            </div>
                            <div className="line"></div>
                            <div  className='circle'>
                                <img className='check-mark' src={check} />
                            </div>
                        </div>
                        <div>
                            <button className='fake-transaction' onClick={handleClick}>
                                Move forward transaction
                            </button>
                        </div>
                    </ModalBody> */}
                </div>
            </Modal>
        </>
    )
}

export default PreparationModal