import React from 'react';
import styles from './Modal.module.css';

interface ModalBodyProps {
    children: React.ReactNode;
}

const ModalBody = ({children}: ModalBodyProps) => {
    return <div className={styles.content}>{children}</div>
};


export default ModalBody;