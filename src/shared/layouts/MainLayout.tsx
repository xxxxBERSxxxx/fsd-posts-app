import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../widgets/LayoutHeader/Header';
import Footer from '../../widgets/LayoutFooter/Footer';
import styles from './MainLayout.module.css';



const MainLayout: React.FC= () => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.content}> 
         <Outlet />
         </main>
      <Footer />
    </div>
  );
};

export default MainLayout;





