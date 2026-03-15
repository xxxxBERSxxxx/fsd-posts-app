import { createContext, useContext } from 'react';

interface ModalContextType {
    onClose: ()=> void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const useModalContext =()=>{
    const context = useContext(ModalContext);
    if(!context){
        throw new Error('Модальные компоненты должны использоваться внутри модального окна.');
    }
    return context;
};

export default ModalContext;

