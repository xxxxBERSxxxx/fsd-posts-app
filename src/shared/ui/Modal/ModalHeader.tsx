import React from 'react';
import { useModalContext } from './ModalContext';
import styles from './Modal.module.css';

interface ModalHeaderProps {
    children: React.ReactNode;
}

const ModalHeader = ({children}: ModalHeaderProps)=>{
    const {onClose} = useModalContext();
    return (
        <div className={styles.header}>
<h2>{children}</h2>
<button className={styles.close} onClick={onClose}>x</button>
        </div>
    );
};

export default ModalHeader;




