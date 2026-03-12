import React, { useState } from 'react';
import styles from './Header.module.css';
import ThemeSwitcher from '../../features/ThemeSwitcher/ui/ThemeSwitcher';
import Button from '../../shared/ui/Button/Button';
import Modal from '../../shared/ui/Modal/Modal';

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

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="О проекте"
      >
        <p>Этот блог создан в рамках учебного проекта.</p>
        <p>Используемые технологии: React, TypeScript, CSS Modules.</p>
        <p>Реализовано переключение темы и модальное окно через портал.</p>
      </Modal>
    </>
  );
};

export default Header;
