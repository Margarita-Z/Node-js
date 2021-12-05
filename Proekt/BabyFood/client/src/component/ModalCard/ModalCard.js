import React, { useState } from "react";
import { Button } from 'react-bootstrap';
import MydModalWithGrid from "./MydModal";


function ModalCard() {
    const [modalShow, setModalShow] = useState(false);

    return (
        <>
            <Button variant="success" onClick={() => setModalShow(true)}>
                <i class="bi bi-chevron-double-right"></i>
            </Button>

            <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} />
        </>
    );
}

export default ModalCard;