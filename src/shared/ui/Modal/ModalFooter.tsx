import React from "react";
import { useModalContext} from './ModalContext';
import Button from '../Button/Button';
import styles from './Modal.module.css';

interface ModalFooterProps {
    children?: React.ReactNode;
}

const ModalFooter = ({children}: ModalFooterProps)=>{
    const { onClose } = useModalContext();
    return (
        <div className={styles.footer}>
            {children}
            <Button variant="secondary" onClick={onClose}>Закрыть</Button>
        </div>
    );
};


export default ModalFooter;


