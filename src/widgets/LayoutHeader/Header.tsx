import React, { useState } from 'react';
import styles from './Header.module.css';
import ThemeSwitcher from '../../features/ThemeSwitcher/ui/ThemeSwitcher';
import Button from '../../shared/ui/Button/Button';
import { Modal, ModalHeader, ModalBody, ModalFooter } from '../../shared/ui/Modal';


const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <h1>Мой блог</h1>
        <div className={styles.controls}>
          <ThemeSwitcher />
          <Button onClick={() => setIsModalOpen(true)} variant="primary">
            О проекте
          </Button>
        </div>
      </header>

<Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
  <ModalHeader>О проекте</ModalHeader>
  <ModalBody>
    <p>Этот блог создан в рамках учебного проекта.</p>
    <p>Используемые технологии: React, TypeScript, CSS Modules.</p>
    <p>Реализовано переключение темы и модальное окно через портал.</p>
  </ModalBody>
  <ModalFooter />
</Modal>
    </>
  );
};

export default Header;
