import React, { ReactNode} from 'react';
import ReactDOM from 'react-dom';
import ModalContext from './ModalContext';
import styles from './Modal.module.css';


interface ModalProps{
    isOpen: boolean;
    onClose: ()=>void;
    children: ReactNode;
}

const Modal = ({isOpen, onClose, children}: ModalProps)=>{
    React.useEffect(() =>{
        const handleEsc = (e: KeyboardEvent)=> {
            if(e.key === 'Escape') onClose();
        };
        if(isOpen){
            document.addEventListener('keydown', handleEsc);
        }
        return ()=> document.removeEventListener('keydown', handleEsc);
    }, [isOpen, onClose]);

if(!isOpen) return null;

return ReactDOM.createPortal(
    <ModalContext.Provider value={{onClose}}>
<div className={styles.overlay} onClick={onClose}>
    <div className={styles.modal} onClick={(e)=>e.stopPropagation()}>
 {children}
    </div>
</div>
</ModalContext.Provider>,
document.getElementById('modal-root')!
);
};


export default Modal;


















