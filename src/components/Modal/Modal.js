import React, { useState } from "react";

const Modal = () => {
    // State
    const [modal, setModal] = useState(false);

    // Comportement

    const toggleModal = () => {
        setModal(!modal);
    };

    // Affichage
    return (
        <div>
            <button className="btn-modal" onClick={toggleModal}>
                Infos
            </button>

            {modal && (
                <div className="overlay" onClick={toggleModal}>
                    <div className="modal">
                        <div className="modal-content">
                            <h2>MODAL</h2>
                            <p>
                                Cette page est aussi une page de test et de mise
                                en pratique des TP React
                            </p>
                            <div className="modal-close" onClick={toggleModal}>
                                X
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Modal;
